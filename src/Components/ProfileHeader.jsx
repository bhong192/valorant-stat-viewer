export default function ProfileHeader(){
    const frequentAgent = "https://img.redbull.com/images/c_crop,x_991,y_0,h_2160,w_1620/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2021/2/16/bm7cdtb6xdhcibbweehq/valorant-omen"; 
    const profileName = "JoeyWarCrimes"; 
    const playerRank = "https://i.imgflip.com/6eer1g.png"; 
    return(
        <div> 
            <img src={frequentAgent}/>
            <div>
                <h1>{profileName}</h1>
            </div>
            <div>
               <img src={playerRank}/>    
            </div>
        </div>
    ); 
}