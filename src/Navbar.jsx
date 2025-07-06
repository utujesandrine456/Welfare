import React from 'react';
import logo from './assets/image.png';
import HomeImage from './assets/image 1.png'
import styles from './Navbar.module.css';
import { FaHeartPulse } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { RiArmchairLine } from "react-icons/ri";
import { FaUser, FaRegCommentDots } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Fitness from './assets/Fitness.png'
import Nutrition from './assets/Nutrition.png';
import Mental from './assets/Mental.png';
import {Link } from 'react-router-dom';


function Navbar(){
    return (
        <>
            <div className={styles.main_container} >
                <div className={styles.main_content} >
                    <nav className={styles.nav}>
                        <img src={logo} className={styles.logo} />
                        <h1>Wellnest</h1>
                        <div className={styles.links}>
                            <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Appointments</a></li>
                            <li><a href="#">Records</a></li>
                            <li><a href="#">Wellness</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className={styles.content} >
                        <div className={styles.left_content} >
                            <h1>Your Health, <span>Simplified</span></h1>
                            <p>Take control of your wellness journey with our <br></br>comprehensive health platform. Track, manage, and <br></br>improve your health with expert guidance.</p>
                            <button className={styles.start} ><Link to='/signup'>Get Started Free</Link></button>
                            <button className={styles.consultation} >Book Consultation</button>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Titles title="50K+" name="Active Users" />
                                <Titles title="98%" name="Satisfaction" />
                                <Titles title="24/7" name="Support" />
                            </div>
                        </div>
                        <div className={styles.home_image}>
                            <img src={HomeImage} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function Titles(props){
    return (
        <div className={styles.groups}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.name}>{props.name}</p>
        </div>
    )
}

function Content(){
    return (
        <>
            <div className={styles.next_content}>
                <h1>Your Personal Health Dashboard</h1>
                <p>Monitor your vitals, track progress, and stay connected with <br></br> your healthcare team all in one place.</p>
                <div className={styles.cards}>
                    <div className={styles.card1}>
                        <div className={styles.icon_title_row}>
                            <h2>Vital Signs</h2>
                            <FaHeartPulse style={{width: '40px', height: '40px', fontSize: '20px', color: '#17A770', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginTop: '-10px', marginLeft: '30px', display: 'inline-block'}} />
                        </div>
                        <span>
                            <h4>Heart Rate</h4>
                            <p>72BPM</p>
                        </span>
                        <span>
                            <h4>Blood Pressure</h4>
                            <p>120/80</p>
                        </span>
                        <span>
                            <h4>Temperature</h4>
                            <p>98.6F</p>
                        </span>
                    </div>
                    <div className={styles.card2}>
                        <div className={styles.icon_title_row}>
                            <h2>Wellness Score</h2>
                            <FaTrophy style={{width: '40px', height: '40px', fontSize: '20px', color: '#17A770', backgroundColor: '#fff', borderRadius: '50%', padding: '5px', marginTop: '-10px', marginLeft: '30px', display: 'inline-block'}} />
                        </div>
                        <h1>85</h1>
                        <h3>Excellent Progress</h3>
                        <div className={styles.progress_bar}>
                            <div className={styles.progress_fill} style={{ width: `${80}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


function Nextcontent(){
    return (
        <>
            <div className={styles.next_content}>
                <h1>Complete Health Management</h1>
                <p>Everything you need to take control of your health <br></br> journey in one integrated platform.</p>
                <div className={styles.other_cards}>
                    {cards.map((card, index) => (
                        <div key= {index} className={styles.othercard}>
                            <span>{card.icon}</span>
                            <h2>{card.Title}</h2>
                            <p>{card.name}</p>
                            <a>Learn More</a>
                        </div>
                    ))}
                </div>
                <div className={styles.explore_more} >
                    <h1>Explore More</h1>
                    <p>Everything you need to take control of your health <br></br> journey in one integrated platform.</p>
                    <div className={styles.health}>
                        {health.map((card, index) => (
                            <div key={index} className={styles.how}>
                                <h2>{card.title}</h2>
                                <img src={card.image}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            
            <div style={{ backgroundColor: '#17a673', color: '#fff', padding: '60px 0 80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button style={{ background: 'none', border: '2px solid #fff', color: '#fff',fontFamily: 'Abhaya Libre', borderRadius: '32px', padding: '10px 38px', fontSize: '1.2rem', fontWeight: 600, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <FaRegCommentDots size={22} style={{ color: '#0f4331' }} />
                    Contact Us
                </button>
                <h2 style={{ textAlign: 'center', fontSize: '2.7rem', fontWeight: 700, marginBottom: '10px', letterSpacing: '1px' }}>
                    <span style={{ color: '#fff' }}>Any <span style={{ color: '#0f4331', position: 'relative' }}>Insights</span> ?</span><br />
                    <span style={{ color: '#fff' }}>Feel Free To <span style={{ color: '#0f4331' }}>Contact</span> Us</span>
                </h2>
                <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.15rem', maxWidth: '700px', margin: '20px auto 38px' }}>
                    Discover valuable insights and solutions tailored to your trading needs. Contact us today to learn more about how we can streamline your journey and enhance your experience.
                </p>
                <form style={{ width: '100%', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '260px' }}>
                            <label style={{ color: '#0f4331', fontSize: '1.4rem', marginBottom: '8px', display: 'block' }}>Name:</label>
                            <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '38px', padding: '16px 22px', marginTop: '8px', border: '1.5px solid #0f4331' }}>
                                <FaUser size={22} style={{ color: '#0f4331' }} />
                                <input type="text" placeholder="Enter your name" style={{ background: 'none', border: 'none', outline: 'none', color: '#000', fontSize: '1.1rem', marginLeft: '14px', width: '100%' }} />
                            </div>
                        </div>

                        <div style={{ flex: 1, minWidth: '260px' }}>
                            <label style={{ color: '#0f4331', fontSize: '1.2rem', marginBottom: '8px', display: 'block' }}>Email:</label>
                            <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '30px', padding: '16px 22px', marginTop: '8px', border: '1.5px solid #0f4331' }}>
                                <MdEmail size={22} style={{ color: '#0f4331' }} />
                                <input type="email" placeholder="Enter your email" style={{ background: 'none', border: 'none', outline: 'none', color: '#000', fontSize: '1.1rem', marginLeft: '14px', width: '100%' }} />
                            </div>
                        </div>

                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ color: '#0f4331', fontSize: '1.2rem', marginBottom: '8px', display: 'block' }}>Message:</label>
                        <div style={{ display: 'flex', alignItems: 'flex-start', background: '#fff', borderRadius: '38px', padding: '16px 22px', marginTop: '8px', border: '1.5px solid #0f4331' }}>
                            <FaRegCommentDots size={22} style={{ color: '#0f4331', marginTop: '4px' }} />
                            <textarea placeholder="Enter your message" style={{ background: 'none', border: 'none', outline: 'none', color: '#000', fontSize: '1.1rem', marginLeft: '14px', width: '100%', minHeight: '80px', resize: 'vertical' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <button type="submit" style={{ background: '#0f4331', color: '#fff', border: 'none', borderRadius: '20px', padding: '14px 48px', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(145,83,10,0.09)', transition: 'background 0.2s', fontFamily: 'abhaya Libre', fontWeight: 900 }}>
                            Send
                        </button>
                    </div>
                </form>
            </div>


            <div style={{ backgroundColor: 'rgba(222, 237, 228, 0.8)', padding: '50px 0 70px 0', minHeight: '400px' }} className={styles.Questions}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '60px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '350px', maxWidth: '650px' }}>
                        <h2 style={{ textAlign: 'center', color: '#0D7B51', fontSize: '2.7rem', marginBottom: '30px', fontWeight: 'bold' }}>
                            Maybe Your Question Is One Of These.
                        </h2>
                        <p style={{ textAlign: 'center', color: 'grey', fontSize: '1.2rem', marginBottom: '50px'}}>Find answers to commonly asked questions about our products and services here. Can't find what you're looking for? Feel free to reach out to us for personalized assistance.</p>
                        <FAQList />
                    </div>
                </div>
            </div>

            <div className={styles.jumbotron} >
                <h1>Ready To Transform Your Health Journey?</h1>
                <p>Join thousands of users who have taken control of their health <br></br> with our comprehensive platform.</p>
                <div className={styles.buttons}>
                    <button>Start Free Trial</button>
                    <button>Schedule Demo</button>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footer_logo}>
                    <img src={logo} />
                    <h1>Wellnest</h1>
                </div>
                <div className={styles.descri}>
                    <p>Empowering healthier lives though <br></br> innovative digital health solutions.</p>
                </div>
                <div className={styles.platform}>
                    <h2>Platform</h2>
                    <ul>
                        <li><a>Dashboard</a></li>
                        <li><a>Telemedecine</a></li>
                        <li><a>Records</a></li>
                        <li><a>Wellness</a></li>
                    </ul>
                </div>
                <div className={styles.support}>
                    <h2>Support</h2>
                    <ul>
                        <li><a>Help Center</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms Of Service</a></li>
                    </ul>
                </div>
                <div className={styles.connect}>
                    <h2>Connect</h2>
                    <ul>
                        <li><a href="https://linkedin.com"><FaLinkedin /></a></li>
                        <li><a href="https://instagram.com"><FaInstagram /></a></li>
                        <li><a href="https://twitter.com"><FaTwitter /></a></li>
                    </ul>
                </div>
            </footer>

            <div className={styles.rights}>
                <p>&copy; 2025 Wellnest. All rights reserved</p>
            </div>
        </>
    )
}

const health =[
    {title:"Fitness", image:Fitness },
    {title:"Nutrition", image:Nutrition },
    {title:"Mental Health", image:Mental }
]

const cards = [
    {icon: <RiMentalHealthLine /> , Title: "Fitness Tracking", name:"Empower users to monitor daily  workouts, step counts, calories burned."},
    {icon: <FaHandHoldingHeart /> , Title: "Nutrition Monitoring", name:"Log meals, receive dietary needs, and maintain a balanced, healthy diet."},
    {icon: <RiArmchairLine /> , Title: "Mental Health Support", name:"Tools for mood tracking, journal, mindfulness, and connecting with  mental health."}
]


const FAQList = () => {
    const faqs = [
        {
            question: 'What services does Wellnest provide?',
            answer: 'Wellnest offers digital health solutions, including appointment booking, health records management, wellness tracking, and virtual consultations with certified professionals.'
        },
        {
            question: 'How do I book a consultation?',
            answer: 'Simply click on the "Book Consultation" button on the homepage, choose a healthcare professional, select a time, and confirm your appointment. You will receive a confirmation via email.'
        },
        {
            question: 'Is my medical data safe with Wellnest?',
            answer: 'Yes. Wellnest uses advanced encryption and strict data policies to ensure your personal and health data is secure and only accessible to you and your authorized care providers.'
        },
        {
            question: 'Can I access my health records anytime?',
            answer: 'Absolutely. With Wellnest, your health records are stored securely and are accessible 24/7 through your dashboard from any device.'
        },
        {
            question: 'Is Wellnest free to use?',
            answer: 'Yes, Wellnest offers a free tier with access to core features. Additional premium features may be available through optional upgrades.'
        }
    ];
    



    const [openIndex, setOpenIndex] = React.useState(null);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px',}}>
            {faqs.map((faq, idx) => (
                <div key={idx} style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', padding: '28px 32px', cursor: 'pointer', transition: 'box-shadow 0.2s' }} onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: 600, color: '#222', fontFamily: 'inherit' }}>{faq.question}</span>
                        <span style={{ marginLeft: '18px', transition: 'transform 0.2s' }}>
                            {openIndex === idx ? (
                                
                                <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="17" stroke="#17a673" strokeWidth="3" fill="none" />
                                    <rect x="10" y="17" width="16" height="2" rx="1" fill="#17a673" />
                                </svg>
                            ) : (
                                
                                <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="17" stroke="#17a673" strokeWidth="3" fill="none" />
                                    <rect x="10" y="17" width="16" height="2" rx="1" fill="#17a673" />
                                    <rect x="17" y="10" width="2" height="16" rx="1" fill="#17a673" />
                                </svg>
                            )}
                        </span>
                    </div>

                    {openIndex === idx && (
                        <div style={{ marginTop: '18px', color: 'grey', fontSize: '1.15rem', lineHeight: 1.6, transition: 'max-height 0.2s' }}>
                            {faq.answer}
                        </div>
                    )}
                
                </div>
            ))}
        </div>
    );
};


export {Navbar , Titles, Content, Nextcontent};