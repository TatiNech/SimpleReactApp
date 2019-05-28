import React from 'react';

class TournamentSchedule extends React.Component{
    state = {
        isOpen: false, 
        isOpen1: false,
        isOpen2: false
    } 

    handleClick = e => {
        e.preventDefault();

        this.setState({isOpen: !this.state.isOpen});
    }

    handleClick1 = e => {
        e.preventDefault();

        this.setState({isOpen1: !this.state.isOpen1});
    }

    handleClick2 = e => {
        e.preventDefault();

        this.setState({isOpen2: !this.state.isOpen2});
    }

    render(){
      return(
        <div className="schedule">
            <h4>
            <p>
                Анонс турниров!
            </p>
            </h4>    
            <a onClick={this.handleClick}>КУБОК SALETENNIS.COM</a>
            {
                this.state.isOpen ? 
                <div className="contactInformation">
                    <h4>
                    <p>Контактная информация</p>
                    <p>Директор турнира:<br/>
                       Пяк Александр Иванович <br/>
                       Pyak@amatour.ru <br/>
                       +7 (550) 11-11-11 <br/>
                       Место проведения: Теннисны клуб«T-Club»,<br/>
                       (ул. Шопокова 5)<br/>
                       Начало турнира: 11:00
                    </p>
                    </h4>
                    
                </div> 
                : 
                null
            }

        <a onClick={this.handleClick1}>ОТКРЫТИЕ СЕЗОНА ТАЙ-БРЕЙК 2019</a>
        {
                this.state.isOpen1 ? 
                <div className="contactInformation">
                    <h4>
                    <p>Контактная информация</p>
                    <p>Директор турнира:<br/>
                       Клопов Антон <br/>
                       klopov@amatour.ru <br/>
                       +7 (965) 50-33333 <br/>
                       Место проведения: Центр тенниса «Урал»,<br/>
                       (ул. Соболева, 5)<br/>
                       Начало турнира: 09:00
                    </p>
                    </h4>
                    
                </div> 
                : 
                null
            }
            <a onClick={this.handleClick2}>WOMENS CHAMPION CUP</a>
        {
                this.state.isOpen2 ? 
                <div className="contactInformation">
                    <h4>
                    <p>Контактная информация</p>
                    <p>Директор турнира:<br/>
                       Чокоева Айсулуу <br/>
                       chokoeva@mail.ru <br/>
                       +7 (770) 10-00-00 <br/>
                       Место проведения: Теннисные корты «Тай-Брейк»,<br/>
                       (ул. Тоголок-Молдо, 20)<br/>
                       Начало турнира: 09:00<br/>
                       Взнос: 2000 cом
                    </p>
                    </h4>
                    
                </div> 
                : 
                null
            }
        </div>
        )
    }
  }

export default TournamentSchedule;