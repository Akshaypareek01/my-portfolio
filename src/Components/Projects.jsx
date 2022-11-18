import React from 'react';
import styled from 'styled-components';
import kfc from '../Resources/Images/Project/kfc.jpg';
import FitnessBlender from '../Resources/Images/Project/fitnessBlender.png';
import ESPN from '../Resources/Images/Project/tindog.png';
import ZARA from '../Resources/Images/Project/zara.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';
import { useState } from 'react';

const Projects = () => {
    const [state, setState] = useState('')
    const projects = [
        {
            id: 4,
            title: 'Netmeds Clone',
            img: ZARA,
            desc: 'Netmeds is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.',
            worked: 'A collaborative project, built in 4 days by a team of 5 developers.',
            githubLink: 'https://github.com/nidhishpareek/NetMeds-Clone',
            deployedLink: 'https://teamnetlifyclone.netlify.app',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Chakra UI']
        },
        {
            id: 1,
            title: 'Pluralsight Clone',
            img: kfc,
            desc: 'Expert-led online learning for developers & IT professionals. Start learning today! On-demand training made simple. #1 training for individuals and businesses! Offline Access.',
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
            keyPoint1: 'Exercise with certified personal trainers whether you’re at home or on the road.',
            keyPoint2: 'Professionally designed programs take the guesswork out of exercising.',
            githubLink: 'https://github.com/Akshaypareek01/pluralsight',
            deployedLink: 'https://astounding-frangollo-a008ae.netlify.app',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 2,
            title: 'Blue Mercury Clone',
            img: FitnessBlender,
            desc: 'Bluemercury.com is a leading luxury beauty retailer offering the best cosmetics, skin care, makeup, perfume, hair, and bath and body.',
            worked: 'A collaborative project, built in 5 days by a team of 3 developers.',
            keyPoint1: '',
            keyPoint2: '',
            githubLink: 'https://github.com/Akshaypareek01/unit-5-ProjectMasai',
            deployedLink: 'https://bluemercury-sibghat.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 3,
            title: 'TinDog',
            img: ESPN,
            desc: 'A TinDog website same like Tinder',
            worked: 'This is a individual project which is only created by me in 2 days.',
            keyPoint2: '',
            keyPoint1:' ',
            githubLink: 'https://akshaypareek01.github.io/Dogs-Tinder/',
            deployedLink: 'https://akshaypareek01.github.io/Dogs-Tinder/',
            tags: ['HTML', 'CSS', 'Javascript']
        }
    ]

    return (
        <Container id='projects' >
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' height="400px" />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a href={ele.githubLink} target="_blank"><button><GitHubIcon />Github</button></a>
                                <a href={ele.deployedLink} target="_blank"><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid #e9e9e9;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#01a479;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects