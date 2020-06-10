import ReactPlayer from 'react-player'







const VideoRepeater = ({ displayBlock, displayNone, toggle, autoPlay, overText=false, videoPosterImageUrl,videoUrl }) => {

    return (

        <>
            <div className={`video-withd mt-3       ${displayBlock || ''} ${displayNone || 'd-none'}`}>
                <div className="wrapper-video">
                    <img
                        src={videoPosterImageUrl}
                        alt="Video Reel"
                        class={` ${displayNone || ''}`}
                    />
                    <ReactPlayer
                        url={videoUrl}
                        playing={autoPlay}
                        controls
                        width={'100%'}
                        height={'100%'}
                        className='react-player'
                        onEnded={toggle}
                        config={{
                            youtube: {
                                 playerVars: { fs: 0 }
                            }
                        }}

                    />
                    {overText ?
                        <div className={`text-over-video ${displayNone || ''}`}>
                            <div>
                                <h1>Awaraa videotuotantoa</h1>
                                <a onClick={toggle} className={`video-play  `} data-video="video-reel" data-preview="video-reel-preview">
                                    <span>
                                    </span>
                                </a>
                            </div>
                        </div> 

:''}
                </div>
            </div>

        </>

    );
};




export default VideoRepeater;