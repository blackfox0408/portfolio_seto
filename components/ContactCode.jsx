import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'jalilmak519@gmail.com',
    href: 'mailto:davebrown4800@gmail.com',
  },
  {
    social: 'github',
    link: 'https://github.com/seto0125',
    href: 'https://github.com/seto0125',
  },
  {
    social: 'skype',
    link: 'live:.cid.1d208b24fbdc62b0',
    href: 'https://join.skype.com/invite/xinGVAniElsC'
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <label target="_blank" rel="noopener">
            {item.link}
          </label>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <label  target="_blank" rel="noopener">
            {item.link}
          </label>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
