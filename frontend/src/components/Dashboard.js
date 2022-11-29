import React, { useState } from 'react'

function Video({src}) {

    /* <iframe width="1000" height="480" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
  return (
        <video width="1000px" height="480px" controls>
            <source src={src}></source>
        </video>
  )
}

export const Dashboard = () => {
    const [src,setSrc] = useState(false)
    const showVideo=()=>{
        setSrc(!src)
    }
  return (
    <div className='my-5'>
        <div className='d-flex justify-content-center align-items-center video-outer'>
            <div className='shadow'>
                {src? <Video src={src}/>:"No Signal"}
            </div>
        </div>
        <div className='d-flex flex-row justify-content-center mx-5'>
            <table className='mx-auto'>
                <tr>
                    <td className='p-5'><button className='btn btn-lg btn-info'>Upload Image</button></td>
                    <td className='p-5'><button className='btn btn-lg btn-info' onClick={showVideo}>
                        {src? "Stop":"Start"}
                    </button></td>
                </tr>
            </table>
        </div>
    </div>
  )
}
