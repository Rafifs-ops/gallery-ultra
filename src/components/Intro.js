import WebFont from "webfontloader";
import SplitText from './SplitText';

const Intro = () => {

    WebFont.load({
        google: {
            families: ['Honk', 'sans-serif']
        }
    });

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };



    return (
        <div className="intro">
            <div className="intro-title" style={{ fontFamily: 'Honk, sans-serif' }}>
                <SplitText
                    text="Welcome to Gallery Ultra"
                    className="text-2xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
        </div>
    )
}

export default Intro