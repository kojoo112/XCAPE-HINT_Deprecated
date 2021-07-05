import React, {useState, useEffect} from 'react'
import { Card, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../Header.css'

export default function Header(props){

    let themeList = props.themeListState;

    const [merchantList, setMerchantList] = useState([]);

    const getMerchantList = async () => {
        const response = await fetch('/merchant/list');
        const data = await response.json();
        setMerchantList(data);
    }

    const handleMerchant = async (e) =>{
        props.handleMerchantState(e.target.value);
    }

    const handleTheme = async (e) => {
        props.themeState(e.target.value);
    }

    useEffect(() => {
        getMerchantList();
    }, []);


    return(
        <Card className="mb-3 bg-dark text-white">
            <Card.Header>XCAPE Hint Setting</Card.Header>
            <Card.Body>
                <Row>
                    <Col className="col-md-10 col-sm-12">
                        <Row>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>가맹점</InputGroup.Text>
                                    <FormControl as="select" onChange={handleMerchant}>
                                        {merchantList.map((merchant, index) =>(
                                            <option key={index} value={merchant.merchant.merchantCode}>{merchant.merchant.merchantName}</option>
                                        ))}
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>테마</InputGroup.Text>
                                    <FormControl as="select" onChange={handleTheme}>
                                        {themeList.map((theme, index) => (
                                            <option key={index} value={theme.themeCode}>{theme.themeName}</option>
                                        ))}
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-2 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>번호</InputGroup.Text>
                                    <FormControl as="input" type="text" disabled placeholder="인덱스 다음번호">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-2 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>키</InputGroup.Text>
                                    <FormControl as="input" type="text" disabled placeholder="랜덤 키값">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="row-cols-2">
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>힌트 1</InputGroup.Text>
                                    <FormControl as="input">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>힌트 2</InputGroup.Text>
                                    <FormControl as="input">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Button className="col-md-6 col-sm-12" as="input" type="reset" value="저장" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

