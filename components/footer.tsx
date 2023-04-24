const styles = {
  footer: ['bg-white', 'rounded-lg', 'shadow', 'm-4'].join(' '),
  div: [
    'w-full',
    'mx-auto',
    'max-w-screen-xl',
    'p-4',
    'md:flex',
    'md:items-center',
    'md:justify-between'
  ].join(' '),
  span: [
    'text-sm',
    'text-gray-500',
    'sm:text-center',
    'dark:text-gray-400'
  ].join(' '),
  ul: [
    'flex',
    'flex-wrap',
    'items-center',
    'mt-3',
    'text-sm',
    'font-medium',
    'text-gray-500',
    'dark:text-gray-400',
    'sm:mt-0'
  ].join(' ')
};

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <span className={styles.span}>
          © 2023{' '}
          <a href="https://Dobro.com/" className="hover:underline">
            Dobro™
          </a>
          . All Rights Reserved.
        </span>
        <ul className={styles.ul}>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
