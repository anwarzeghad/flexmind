import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import Terminal from '../components/terminal'

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-b from-white to-[#e9f9f8] dark:from-gray-900 dark:to-gray-800"
    >
      {/* Texte à gauche */}
      <section className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl py-20 md:text-5xl font-extrabold leading-tight tracking-wide text-[#115f5c] dark:text-[#a0f0dd]">
          <span style={{ whiteSpace: 'nowrap' }}>{t('home.title_part1')}</span>
          <br />
          <span
            className="text-[#12a387] dark:text-[#12a387] inline-block mt-2"
            style={{ whiteSpace: 'nowrap' }}
          >
            <Typewriter
              key={`${i18n.language}-typewriter`}
              words={[t('home.title_part2')]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
          {t('home.description')}
        </p>
      </section>

      {/* Terminal à droite */}
      <section className="mt-12 mb-20 md:mb-0 md:mt-0 md:ml-20 flex justify-center w-full md:w-auto">
        <Terminal />
      </section>
    </div>
  );
};

export default Home;
