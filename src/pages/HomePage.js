import React, { useState } from 'react';
import Slider from 'react-slick';
import dataBreachMap from '../assets/images/Data breach map.png';
import victimCountByAge from '../assets/images/Cybercrime victim count by age.png';
import impactOfCybercrimes from '../assets/images/Impact of different cybercrimes.png';
import cybercrimeDensity from '../assets/images/Top 10 countries by cybercrime density.png';
import cybercrimeCosts from '../assets/images/Yearly growth of cybercrime costs.png';
import '../styles/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const [currentDataSlide, setCurrentDataSlide] = useState(0);
  const [currentContentSlide, setCurrentContentSlide] = useState(0);

  const dataSlideContents = [
    {
      title: "Data Breach Map",
      content: (
        <div>
          <img src={dataBreachMap} alt="Data Breach Map" className="img-fluid my-4" />
          <p>
            Data breaches have become increasingly common, affecting millions of users worldwide. This map shows the distribution of breached email accounts per 1,000 internet users in different countries.
          </p>
        </div>
      )
    },
    {
      title: "Cybercrime Victim Count by Age",
      content: (
        <div>
          <img src={victimCountByAge} alt="Cybercrime Victim Count by Age" className="img-fluid my-4" />
          <p>
            Cybercrime affects individuals of all ages. This chart illustrates the count of cybercrime victims segmented by age group over the years.
          </p>
        </div>
      )
    },
    {
      title: "Impact of Different Cybercrimes",
      content: (
        <div>
          <img src={impactOfCybercrimes} alt="Impact of Different Cybercrimes" className="img-fluid my-4" />
          <p>
            Different types of cybercrimes have varying impacts. This chart highlights the financial losses and victim counts associated with various cybercrime types.
          </p>
        </div>
      )
    },
    {
      title: "Top 10 Countries by Cybercrime Density",
      content: (
        <div>
          <img src={cybercrimeDensity} alt="Top 10 Countries by Cybercrime Density" className="img-fluid my-4" />
          <p>
            This chart shows the top 10 countries with the highest cybercrime density, measured by the number of victims per million internet users.
          </p>
        </div>
      )
    },
    {
      title: "Yearly Growth of Cybercrime Costs",
      content: (
        <div>
          <img src={cybercrimeCosts} alt="Yearly Growth of Cybercrime Costs" className="img-fluid my-4" />
          <p>
            The costs associated with cybercrime have been growing year over year. This chart depicts the yearly growth in financial losses and the hourly count of victims.
          </p>
        </div>
      )
    }
  ];

  const contentSlideContents = [
    {
      title: "Types of Cyber Attacks on Social Media",
      content: (
        <ul>
          <li>
            <strong>Phishing:</strong> Cybercriminals use fake messages and websites to trick users into revealing sensitive information, 
            such as passwords and credit card numbers.
          </li>
          <li>
            <strong>Malware:</strong> Malicious software is spread through social media links or attachments, 
            compromising users' devices and data.
          </li>
          <li>
            <strong>Social Engineering:</strong> Attackers manipulate individuals into divulging confidential information 
            by exploiting human psychology.
          </li>
          <li>
            <strong>Account Hijacking:</strong> Cybercriminals gain unauthorized access to users' social media accounts, 
            often to spread spam or conduct further attacks.
          </li>
        </ul>
      )
    },
    {
      title: "Preventive Measures",
      content: (
        <ul>
          <li>
            <strong>Enable Two-Factor Authentication (2FA):</strong> Adding an extra layer of security can prevent unauthorized access.
          </li>
          <li>
            <strong>Be Cautious of Suspicious Links:</strong> Avoid clicking on unknown or suspicious links, 
            even if they appear to come from friends or trusted sources.
          </li>
          <li>
            <strong>Use Strong, Unique Passwords:</strong> Ensure your social media passwords are strong and unique to each platform.
          </li>
          <li>
            <strong>Regularly Update Privacy Settings:</strong> Keep your privacy settings up to date to control who can see your information.
          </li>
          <li>
            <strong>Educate Yourself:</strong> Stay informed about the latest cyber threats and how to protect yourself.
          </li>
        </ul>
      )
    },
    {
      title: "Cyber Attacks on Social Media in Indonesia",
      content: (
        <p>
          In Indonesia, cyber attacks on social media have become increasingly prevalent. The rapid adoption of social media platforms 
          has made the country a target for cybercriminals. These attacks often aim to steal personal information, spread malware, 
          and hijack accounts for malicious purposes. According to recent statistics, Indonesia ranks high in the list of countries affected by cybercrime, 
          with a significant number of data breaches and ransomware attacks reported annually.
        </p>
      )
    },
    {
      title: "Case Studies",
      content: (
        <ul>
          <li>
            <strong>2018 Data Breach:</strong> In 2018, a major data breach affected millions of Indonesian social media users. 
            Personal data, including names, email addresses, and phone numbers, were leaked online.
          </li>
          <li>
            <strong>Phishing Scams:</strong> Numerous phishing scams have targeted Indonesian users, with fake login pages for popular 
            social media sites designed to steal credentials.
          </li>
          <li>
            <strong>Fake News and Disinformation:</strong> Cyber attacks are also used to spread fake news and disinformation, 
            aiming to influence public opinion and create social unrest.
          </li>
        </ul>
      )
    },
    {
      title: "Government and Organizational Responses",
      content: (
        <p>
          The Indonesian government and various organizations have taken steps to combat cyber attacks. Initiatives include:
          <ul>
            <li>
              <strong>Cybersecurity Awareness Campaigns:</strong> Educating the public about the risks of cyber attacks and how to stay safe online.
            </li>
            <li>
              <strong>Regulatory Measures:</strong> Implementing laws and regulations to protect personal data and combat cybercrime.
            </li>
            <li>
              <strong>Collaboration with Social Media Platforms:</strong> Working with social media companies to improve security features 
              and respond quickly to threats.
            </li>
          </ul>
        </p>
      )
    }
  ];

  const dataSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentDataSlide(next)
  };

  const contentSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentContentSlide(next)
  };

  return (
    <div className="container">
      <h3>Cyber Attacks on Social Media</h3>
      <p>
        In today's digital age, social media platforms have become integral to our daily lives. 
        However, they are also prime targets for cyber attacks. These attacks can have serious consequences, 
        including data breaches, identity theft, and financial loss.
      </p>
      <h5>{dataSlideContents[currentDataSlide].title}</h5>
      <Slider {...dataSettings}>
        {dataSlideContents.map((slide, index) => (
          <div key={index}>
            {slide.content}
          </div>
        ))}
      </Slider>
      <h5>{contentSlideContents[currentContentSlide].title}</h5>
      <Slider {...contentSettings}>
        {contentSlideContents.map((slide, index) => (
          <div key={index}>
            {slide.content}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;
