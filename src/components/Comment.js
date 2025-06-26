import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Image } from "react-bootstrap"

const Comment = ({ isNightMode }) => {

    const [count, setCount] = useState(1);
    const hitung = () => {
        setCount(count + 1);
    };
    const kurang = () => {
        setCount(count - 1);
        if (count < 2) {
        return setCount(1)
        };
    };

    const [comment, setComment] = useState('');
    useEffect(() => {
        fetch('https://dummyjson.com/comments/' + count).then(e => e.json()).then(data => setComment(data))
    }, [count]);

    const [user, setUser] = useState('')
    useEffect(() => {
        fetch('https://dummyjson.com/comments/' + count).then(p => p.json()).then(name => setUser(name.user.fullName))
    }, [count]);

    const [img, setImg] = useState(null)
    useEffect(() => {
        setImg(null);
        fetch('https://dummyjson.com/users/' + count).then(g => g.json()).then(foto => setImg(foto))
    }, [count]);

    const commentStyle = {
        backgroundColor: isNightMode ? '#210F37' : 'white',
        color: isNightMode ? 'white' : 'black',
    };

    WebFont.load({
            google: {
                families: ['Bungee Spice', 'sans-serif']
            }
    });


    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h1 className="text-center" style={{ fontFamily: 'Bungee Spice, sans-serif' }}>Comments</h1>
                </Col>
            </Row>
            <Row className="justify-content-center" style={commentStyle}>
                <Col md={'auto'} className="shadow rounded m-5 p-3 text-center" style={{width: 300, height:400}}>
                    {img && <Image src={img.image} roundedCircle  width={200} height={200}/>}
                    {!img && <div style={{height: 200}}><p>Loading...</p></div>}
                    <h3>{user}</h3>
                    <p style={{height:50}}>{comment.body}</p>
                    <p><Button variant="primary" onClick={kurang}>Prev</Button> <Button variant="primary" onClick={hitung}>Next</Button></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Comment