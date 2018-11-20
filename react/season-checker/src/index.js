import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         error => console.log(error)
//     )

//     return(
//         <div>
//             <SeasonDisplay>

//             </SeasonDisplay>
//         </div>
//     );
// };

class App extends React.Component {

        constructor(props) {
            super(props);

            // state라는 object를 초기화 (예약어)
            this.state = {
                lat: null, // 아직 모름
                errorMessage: '',

            };
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({
                        lat: position.coords.latitude
                    });
                },
                error => {
                    this.setState({
                        errorMessage: error.message
                    });
                }
            );
        }

        render() {
            if (this.state.errorMessage && !this.state.lat) {
                return ( < div > Error: {
                    this.state.errorMessage
                         } </div>);
                }

           if (!this.state.errorMessage && this.state.lat) {
                return ( < div > Lat: {
                    this.state.lat
                        } </div>);
                }   
            return ( < div > Loading... </div>)
                       }
               }

ReactDOM.render( < App / > , document.querySelector('#root'));




                    {/* // 1. 브라우저 jS 파일 불러옴
                    // 2. <App/>> 컴포넌트 생ㅇ성
                    // 3. Geolocation API 가 위치정보 받기 시작
                    // 4. React App이 JSX를 리턴하며 html 랜더링
                    // 5. ....
                    // 6. 사용자 위치정보 get
                    // 7. state 객체를 this.setState()로 업뎃
                    // 8. React가 component의 state의 업뎃을 눈치챔
                    // 9. React가 해당 Comp의 render() 실행
                    // 10. render()가 바뀐 state를 담은 jsx 리턴
                    // 11. React가 바뀐 jsx 렌더

                    // lat: O / errorMessage: X => lat 보여준다
                    // lat: x / errorMessage: o => errorMessage 보여줌
                    // lat: null / errorMessage: null => loading.. 보여줌 */}