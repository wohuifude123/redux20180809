import React from 'react';
import './assets/styles/index.less';

import HttpUtil from 'PATH_SRC_UTILS/httpUtil';
import Helper from 'PATH_SRC_UTILS/helper';

class PopupWindow extends React.Component {

	constructor() {
		super();
		this.state = {
			current: 0,
			totalTag: [],
			examineTag: [],
			videoUrl: '',
			timeContent: [],
			ocrData: [], // ORC信息
			voiceData: [], // 语音信息
			highLightIndex: 0,
			highLightArray: [],
			currentHighLight : 0
		}

		this.showHighLight = this.showHighLight.bind(this);//推荐写法
	}

	showHighLight( index ) {
		const _self = this;
		//console.log( 'index = ', index)
		_self.setState({
			currentHighLight : index,
			highLightIndex: index
		})
	}

	render(){

		const _self = this;

		let ocrDataDiv = _self.state.ocrData && _self.state.ocrData.length !== 0 &&
			this.state.ocrData.map((value,index)=>{
				//console.log(index, ' = ', value)
				let keyWord = value['brightText'];
				//console.log('brightText = ', value['brightText']);
				let reg = '';
				let result = value['content'];
				//console.log('content = ', value['content']);


				if(keyWord.length != 0){
					for(let ki =0; ki<keyWord.length; ki++) {
						reg = new RegExp(keyWord[ki], 'g');
						if (reg.test(result)) {
							result = result.replace(reg, `<span style="color: rgba(71,129,255,1)">${keyWord[ki]}</span>`);
						}

					}
				}

				let htmlSet = {__html: result};
				return (
					<div key={index} className={'time_content'}>
						<div className={'time'}>{value['time']}</div>
						<div className={'content'} dangerouslySetInnerHTML={htmlSet}></div>
						<div className={'line'}></div>
					</div>
				)
			})

		let voiceDataDiv = _self.state.voiceData && _self.state.voiceData.length != 0 &&
			this.state.voiceData.map((value,index)=>{
				//console.log(index, ' = ', value)
				let keyWord = value['brightText'];

				let reg = '';
				let result = value['content'];

				if(keyWord.length != 0){
					for(let ki =0; ki<keyWord.length; ki++) {
						reg = new RegExp(keyWord[ki], 'g');
						if (reg.test(result)) {
							result = result.replace(reg, `<span style="color: rgba(71,129,255,1)">${keyWord[ki]}</span>`);
						}

					}
				}
				// 正则匹配所有的文本
				//console.log('result = ', result)

				let htmlSet = {__html: result};

				return (
					<div key={index} className={'time_content'}>
						<div className={'time'}>{value['time']}</div>
						<div className={'content'} dangerouslySetInnerHTML={htmlSet}></div>
						<div className={'line'}></div>
					</div>
				)
			})

		const titleWord = new Map([
			['ocr', 'OCR识别'],
			['voice', '语音识别']
		]);

		let titleStyle = {
			background: 'rgba(46, 49, 72, 1)'
		};

		let titleStyle2 = {
			background: ''
		};


		let titleDiv = _self.state.highLightArray && _self.state.highLightArray.length !== 0 &&
			_self.state.highLightArray.map((value,index)=>{
			//console.log(index, ' = ', value);
			return (
				<div
					className={'title_recognition fl'}
					key={index}
					style={index === _self.state.currentHighLight ? titleStyle : titleStyle2}
					onClick={
						() => _self.showHighLight(index)
					}
				>
					{titleWord.get(value)}
				</div>
			)
		})


		return (
			<div className={'optical_character_recognition'}>
				<div className={'title'}>
					{titleDiv}
					<div
						className={'close_recognition rl'}
						onClick={this.props.cancel}
					>关闭</div>
				</div>

				<div className={'clearBoth'}></div>
				{
					<div className={'time_content_total'}>
						{
							_self.state.highLightIndex === 0?
								ocrDataDiv:voiceDataDiv
						}
					</div>
				}
			</div>
		)
	}

	componentDidMount(){
		const _self = this;

		console.log('公共组件生命周期');



	}

	componentWillReceiveProps(newProps) {

		const _self = this;
		//console.log('newProps = ', newProps);

		let ocrVoiceDataLength = 0;
		let ocrData = [];
		let voiceData = [];
		let highLightArray = [];

		let highLightIndex = 0;

		for(var name in newProps['ocrVoiceData']){
			//console.log(newProps['ocrVoiceData'][name])
			if(newProps['ocrVoiceData'][name].length !== 0) {
				highLightArray.push(name)
			}
		}


		if( newProps['ocrVoiceData']['ocr'] === undefined ) {
			ocrVoiceDataLength = 1;
		} else if ( newProps['ocrVoiceData']['ocr'] !== undefined ) {
			if( newProps['ocrVoiceData']['ocr'].length === 0 ) {
				ocrVoiceDataLength = 1;
			}
		} else if ( newProps['ocrVoiceData']['voice'] === undefined ) {
			ocrVoiceDataLength = 1;
		} else if( newProps['ocrVoiceData']['voice'] !== undefined ) {
			if( newProps['ocrVoiceData']['voice'].length === 0 ) {
				ocrVoiceDataLength = 1;
			}
		} else {
			ocrVoiceDataLength = 2;
		}

		//console.log('ocrVoiceDataLength = ', ocrVoiceDataLength)

		if( newProps['ocrVoiceData']['ocr'] !== undefined)
		{
			if( newProps['ocrVoiceData']['ocr'].length !== 0) {
				ocrData = newProps['ocrVoiceData']['ocr'];
			}
		}

		if( newProps['ocrVoiceData']['voice'] !== undefined ) {
			if(newProps['ocrVoiceData']['voice'].length !== 0) {
				voiceData = newProps['ocrVoiceData']['voice'];
			}
		}

		if(newProps['ocrVoiceData']['voice'] !== undefined && ocrVoiceDataLength === 1)
		{
			if(newProps['ocrVoiceData']['voice'].length !== 0 && ocrVoiceDataLength === 1){
				highLightIndex = 1;
			}
		}

		//console.log('ocrData = ', ocrData);

		//console.log('voiceData = ', voiceData);

		//console.log('highLightIndex =', highLightIndex)

		_self.setState({
			timeContent: [],
			ocrVoiceDataLength: ocrVoiceDataLength,
			ocrData: ocrData,
			voiceData: voiceData,
			highLightArray: highLightArray,
			highLightIndex: highLightIndex
		})


	}
	shouldComponentUpdate(newProps, newState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		//console.log('Component WILL UPDATE!');
	}
	componentDidUpdate(prevProps, prevState) {
		//console.log('Component DID UPDATE!')
	}
}

export default PopupWindow;



