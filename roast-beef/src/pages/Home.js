import React, {useState} from 'react';
import Logo from '../images/logo.png';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCss.css'
import {NavBar, LandingPage, List, DDButton, LandingPageWrapper,Post,PostContents,Text, SearchBar} from '../pages/style';


const SearchbarDropdown = (props) => {
    const {options, onInputChange} = props;
    return(
        <div className = "outerleft">
            <SearchBar type="text" placeholder="Search Here" onChange={onInputChange}/> <p/>
            <ul id = "results">
                {options.map((option, index) => {
                    return (
                        <DDButton
                            className='list-group-item list-group-item-action'
                            key={index}
                        >
                            {option}
                        </DDButton>
                    );
                })}
            </ul>
        </div>
    );
}

const defaultOptions = [];
defaultOptions.push(`#political`);
defaultOptions.push(`#sports`);
defaultOptions.push(`#basketball`);
defaultOptions.push(`#business`);
defaultOptions.push(`#entertainment`);
defaultOptions.push(`#arts`);
defaultOptions.push(`#history`);
defaultOptions.push(`#casual`);
defaultOptions.push(`#ucla`);
defaultOptions.push(`#computer science`);
defaultOptions.push(`#wordle`);
defaultOptions.push(`#globle`);
defaultOptions.push(`#handshakes`);

for(let i = 0; i < 10; i++){
    defaultOptions.push(`tag ${i}`);
}

const Home = () => {
    const [options, setOptions] = useState([]);
    const onInputChange = (event) => {
        console.log(event.target.value);
        setOptions(
            defaultOptions.filter((option) => option.includes(event.target.value))
        );
    };

    return (
        <LandingPage>
            <NavBar>
                <SearchbarDropdown options={options} onInputChange={onInputChange}/>
                <div className = "stayPut">
                <a href='/' className="NavLogo">
                        <marquee behavior="alternate" width="300" >
                            <img
                                src={Logo}
                                alt="Logo"
                                align="left"
                                width="200" height="133"
                            ></img>
                        </marquee>
                </a>
                </div>
            </NavBar>
            <p />
            <LandingPageWrapper>
                <Post>
                <Text>TITLE</Text> <p/>
                <PostContents></PostContents> 
                </Post>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default Home;