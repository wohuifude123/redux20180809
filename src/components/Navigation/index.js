import React from 'react';
import './assets/styles/index.less';
import Group from './assets/images/group.png';
import Logo from './assets/images/logo1.png';

class Navigation extends React.Component {

	constructor() {
		super();
		this.state = {
			current: 0
		}
		this.handleClickLi = this.handleClickLi.bind(this);//推荐写法

		this.handleClickJump = this.handleClickJump.bind(this);
	}

	handleClickJump () {
		window.location.href= `./index.html`;
	}

	handleClickLi(item,event) {
		console.log('item = ', item)
		this.setState({
			current: item
		});

		if( item === 0) {
			//window.location.href= 'http://127.0.0.1:6600/result.html';
			window.location.href= `./video.html`;
		} else if ( item === 1 ) {
			//window.location.href= `http://${ENV.ws.url}:${ENV.ws.port}/search.html`;
			window.location.href= `./search.html`;
		} else if ( item === 2 ) {
			//window.location.href= 'http://127.0.0.1:6600/search.html';
			window.location.href= `./task.html`;
		} else if ( item === 3 ) {
			//window.location.href= `http://${ENV.ws.url}:${ENV.ws.port}/task.html`;
			window.location.href= `./task.html`;
		}
	}

	render(){

		let _self = this;

		let liStyle = {
			color: 'rgba(71, 129, 255, 1)',
			cursor: 'pointer'
		}

		let liStyle02 = {
			color: 'rgba(155, 163, 196, 1)',
			cursor: 'pointer'
		}

		const liMap = [
			{
				name: '视频审核'
			},
			{
				name: '视频搜索'
			},
			// {
			// 	name: '数据库'
			// },
			{
				name: '任务管理器'
			},
		]

		let currentIndex = this.props.currentIndex ?
			this.props.currentIndex : 0

		let liBody = liMap.map( (item, index) => {
			//console.log(item, '==', index)
			return (
				<li
					key={0}
					style = {
						currentIndex === index ?liStyle : liStyle02
					}
					className={'navigation_word_li'}
					onClick={
						(event) => this.handleClickLi(index, event)
					}
				>
					{item.name}
				</li>);
		});

		return (
			<div className={'navigation_div'}>
				<div
					className={'logo_div fl'}
					onClick={this.handleClickJump}
				>&nbsp;</div>
				<div className={'word_div_ul_li fl'}>
					<ul className={'navigation_word_ul'}>
						{liBody}
					</ul>

				</div>

			</div>
		)
	}
}

export default Navigation;