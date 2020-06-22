import React, { useContext } from 'react';

import './channel.css';
import { GlobalContext } from '../../context';



function Channel({ user, channel_id }) {
	const { socket,
			renderChat, //DEV
			setRenderChat,
			setChannelRender } = useContext(GlobalContext);


	function handleRenderChatArea() {
		setChannelRender({ channel_id, user });

		setRenderChat(!renderChat);
		// setRenderChat(true);../../assets/img/

	}

	
	return (
		<li className="channel" >
			<div className="channel-wrapper">
				<div className="crop-picture">
					 <img src={ require("../../assets/img/default.jpg") } alt="profile picture" className="profile-picture" />
				</div>
				<div className="channel-preview" onClick={ handleRenderChatArea } >
					<h2 className="channel-name">{ user }</h2>
				</div>
			</div>
			
			<hr className="list-line" />
		
		</li>

	);

}


export default Channel;