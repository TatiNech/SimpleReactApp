import React from 'react';
import gallery from './imgLastTour/Karven11.05.2019/1.jpg';
import gallery1 from './imgLastTour/Karven11.05.2019/2.jpg';
import gallery2 from './imgLastTour/Karven11.05.2019/3.jpg';
import gallery3 from './imgLastTour/Karven11.05.2019/4.jpg';

class LastTournament extends React.Component{
    state = {
        isOpen: false,
        fullImage:null
    } 

    hadleShowGallery = (e) => {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleFullImage = e => {
        this.setState({fullImage:e.target.src})
    }

    handleCloseImage = () => {
        this.setState({fullImage: null});
    }
      render(){ 
        return (
            <div classname="lastTour">
                <h4>
                    <p>
                    Прошедшие турниры!
                    </p>
                <hr/> 
                    <p>
                        "Karven Issyk-Kul First Mixed Cup 2019"
                    </p>
                    <p>
                    Турнир состоялся 11 мая 2019 г. <br/>
                    Победители: <br/>
                    1 место: Клименко Александр и Меерканов Самат<br/>
                    2 место: Хан Константин и Чокоева Айсулуу<br/>
                    3 место: Садыков Фуркат и Буюклянова Нелли<br/>    
                    </p>
                    
                </h4>
                    <button onClick ={this.hadleShowGallery}>Фото-Галерея</button>
                    {
                    this.state.isOpen ? 
                        <div className="gallery">
                            <img onClick = {this.handleFullImage} src={gallery}/>
                            <img onClick = {this.handleFullImage} src={gallery1}/>
                            <img onClick = {this.handleFullImage} src={gallery2}/>
                            <img onClick = {this.handleFullImage} src={gallery3}/>
                         </div> 
                        : 
                        null
                    }
                <hr/>  
                {
                    this.state.fullImage ? 
                    <div class="fullImage">
                    <img src={this.state.fullImage}/>
                    <button onClick = {this.handleCloseImage}>X</button>
                </div>
                :
                null
                }
                    <h4>
                    <p>
                    Турнир «Laguna City Open»                 
                    </p>
                    
                    <p>
                    Турнир состоялся 13-16 сентября 2018 г <br/>
                    Победители: <br/>
                    Женский одиночный разряд<br/>
                    3 место: Макаева Асель<br/>
                    2 место: Исабекова Роза<br/>
                    1 место: Нечаева Татьяна<br/>

                    Женский парный разряд<br/>
                    1 место: Благовисная Лейли, Омурзакова Асель<br/>

                    Микст разряд<br/>
                    3 место: Жусупов Азат и Голованова Ольга<br/>
                    2 место: Лях Павел и Омурзакова Элиза<br/>
                    1 место: Чертков Михаил и Исабекова Роза<br/>
                    </p>
                    </h4>
                    <hr/>

            </div>
         )   
    }
}

export default LastTournament;