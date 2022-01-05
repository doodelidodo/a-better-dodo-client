import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Dashboard from "./components/dashboard/Dashboard";
import Habits from "./components/habits/Habits";
import Diaries from "./components/diary/Diaries";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Container>
                <Row className="content">
                    <Col>
                        <Routes>
                            <Route exact path="/dashboard" element={<Dashboard/>}/>
                            <Route exact path="/habits" element={<Habits/>}/>
                            <Route exact path="/diaries" element={<Diaries/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
