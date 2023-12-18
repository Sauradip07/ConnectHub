import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
var string = (Math.random() * 100).toString();
var trimmedString = string.substring(0,2);

const RoomPage = () => {
    const { roomId } = useParams();
    const myMetting = async (element)=>{
        const appID = 618911883;
        const serverSecret = process.env.REACT_APP_SECRET_KEY;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,
            roomId,Date.now().toString(),"Name "+ trimmedString );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
                
            }
        });
    }
    return (
        <div className="room-page" ref={myMetting} style={{ width: '100vw', height: '100vh' }}>
        
        </div>
    )
}

export default RoomPage
