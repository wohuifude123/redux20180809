import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.less';

class Nightingale extends React.Component {

	constructor() {
		super();
		this.state = {
			breakDown: []
		}
	}

	_init(){

		// 参数设置
		const doc = this.element;

		//var optionECharts = this.props.defaultProps;

		// 基于准备好的dom，初始化echarts实例
		return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
			let myChart = echarts.init(doc);
			// 指定图表的配置项和数据

			var dataMap = {};
			function dataFormatter(obj) {
				var pList = ['错误','非常缓慢','缓慢','正常'];
				var temp;
				temp = obj;
				for (var i = 0, l = temp.length; i < l; i++) {
					obj[i] = {
						name : pList[i],
						value : temp[i]
					}
				}
				//console.log('obj =', obj)
				return obj;
			}

			dataMap.dataGDP = dataFormatter([4315, 2150.76, 6018.28, 2324.8]);


			//console.log(dataMap)

			const barColor = new Map([
				['错误', '#FA2465'],
				['非常缓慢', '#E26C6E'],
				['缓慢', '#FFBA63'],
				['正常', '#2AF4FF']
			])

			let amountData = {
				'error': 0,
				'health': 0,
				'slow' : 0,
				'verySlow': 0,
				'total': 131,
				'errorPercentage':0,
				'healthPercentage':0,
				'slowPercentage':0,
				'verySlowPercentage':0
			}

			if(this.state.breakDown.length !== 0) {
				amountData['total'] = 0;
				this.state.breakDown.map(function(item, index){
					amountData[item['level']] = item['amount']
				})

				amountData['total'] = amountData['error']+amountData['health']+
					amountData['slow']+amountData['verySlow'];
				amountData['errorPercentage']= parseInt(amountData['error']/amountData['total']*100)
				amountData['healthPercentage']= parseInt(amountData['health']/amountData['total']*100)
				amountData['slowPercentage']= parseInt(amountData['slow']/amountData['total']*100)
				amountData['verySlowPercentage']= 100 - (amountData['errorPercentage']+
					amountData['healthPercentage']+ amountData['slowPercentage'])
				console.log('amountData =', amountData)

			}

			//console.log('amountData =', amountData)


			let option = {
				//backgroundColor: '#2c343c',

				// title: {
				// 	text: 'Customized Pie',
				// 	left: 'center',
				// 	top: 20,
				// 	textStyle: {
				// 		color: '#ccc'
				// 	}
				// },

				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},


				series : [
					{
						name:'访问来源',
						type:'pie',
						radius : '55%',
						center: ['50%', '50%'],
						data:[
							{value:135, name:'违规视频'},
							{value:310, name:'已通过视频'},
							{value:274, name:'待处理视频'}
						].sort(function (a, b) { return a.value - b.value; }),
						roseType: 'radius',
						label: {
							normal: {
								textStyle: {
									color: 'rgba(255, 255, 255, 0.3)'
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: 'rgba(255, 255, 255, 0.3)'
								},
								smooth: 0.2,
								length: 10,
								length2: 20
							}
						},
						itemStyle: {
							normal: {
								color: function(params) {
									//console.log('params = ', params)
									if(params.data['name'] === '违规视频') {
										//console.log('params = ', params.data['name']);
										return 'rgba(0,80,255,1)'
									} else if(params.data['name'] === '已通过视频'){
										return 'rgba(135,90,242,1)'
									} else if(params.data['name'] === '待处理视频') {
										return 'rgba(245,206,67,1)'
									} else {
										return 'red'
									}

								},
								//shadowBlur: 200,
								//shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},

						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						}
					}
				]
			};




			// 使用刚指定的配置项和数据显示图表
			if (option && typeof option === 'object') {
				myChart.setOption(option, true);
			}
		}).catch(error => 'An error occurred while loading the components');
	}

	render() {

		const _self = this;

		//console.log('_self.props.styleSet =', _self.props.styleSet)
		let divStyle = {

			width: 1580,
			height: 950,
			marginLeft: 20,
			//background: 'blue'
		}




		return (
			<div>
				<div
					ref={(elem) => { this.element = elem; }}
					style = {divStyle}
					className={`${this.props.styleSet}`}
				>
				</div>
			</div>

		)
	}

	componentDidMount() {
		this._init();
	}

	componentWillReceiveProps(nextProps) {  // 接收新的参数
		//console.log(nextProps.data);
		this.setState({
			breakDown: nextProps.breakDown
		});
	}

	componentDidUpdate() {
		//console.log('数据中心故障情况更新')
		//this._init();
	}
}

export default Nightingale;