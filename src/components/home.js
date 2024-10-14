import cola from '../assets/Images/Cola.jpg';
import pepsi from '../assets/Images/Pepsi.jpg';
import beer from '../assets/Images/Beer.jpg';
import fanta from '../assets/Images/Fanta.jpg';
import miller from '../assets/Images/Miller.jpg';
import monster from '../assets/Images/monstor.jpg';
import redbull from '../assets/Images/redbull.jpg';
import runa from '../assets/Images/Runa.jpg';

function Home() {
    return (
        <div className='products'>
            <div>
                <img src={cola} alt='cola' />
                <h3>Cola</h3>
            </div>
            <div>
                <img src={pepsi} alt='pepsi' />
                <h3>Pepsi</h3>
            </div>
            <div>
                <img src={fanta} alt='fanta' />
                <h3>Fanta</h3>
            </div>
            <div>
                <img src={beer} alt='beer' />
                <h3>Beer</h3>
            </div>
            <div>
                <img src={miller} alt='miller' />
                <h3>Miller</h3>
            </div>
            <div>
                <img src={monster} alt='monster' />
                <h3>Monster</h3>
            </div>
            <div>
                <img src={redbull} alt='redbull' />
                <h3>Redbull</h3>
            </div>
            <div>
                <img src={runa} alt='runa' />
                <h3>Runa</h3>
            </div>
        </div>
    );
}

export default Home;
