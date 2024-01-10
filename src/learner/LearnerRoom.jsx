import React from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const LearnerRoom = () => {
    const { roomId } = useParams();



    const myMeeting = async (element) => {
        const appID = 311553807;
        const serverSecret = "5cb9b845b7ded72524e4393cf58afbd6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Kartikey");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <>


            <div className="room-page" style={{width:'100vw',backgroundColor:'yellow',justifyContent:'center',height:'50vh'}}>
                {roomId}
                
                    <div ref={myMeeting} />
               
            </div>

        </>
    );
};

const roomStyle = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};

export default LearnerRoom;
