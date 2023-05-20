import { Player } from '@lottiefiles/react-lottie-player';
import manm from "../../assets/images/JCF/manandrobo.json";

const Lotti = () => {
  return (
    <div className=''>
      <Player
        src={manm}
        className="player"
        loop
        autoplay
        style={{ height: '408px', width: '600px' }}
      />

    </div>
  )
}

export default Lotti
