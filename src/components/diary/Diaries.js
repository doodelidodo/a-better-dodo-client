import React from "react";
import {ButtonGroup, Col, DropdownButton, Row, Dropdown, Card} from "react-bootstrap";
import Diary from "./Diary";

export default function Diaries() {
    const diaries = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return(
        <div>
            <Row>
                <div className={"d-flex pt-4"}>
                    <div className={"pr-4"}>
                        {[DropdownButton, ].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="secondary"
                                title="Year"
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                    <div>
                        {[DropdownButton, ].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="secondary"
                                title="Month"
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                </div>
            </Row>
            <Row xs={1} md={2} lg={4} className="g-4 pt-4">
                {diaries.map((_, idx) => (
                    <Diary/>
                ))}
            </Row>
        </div>
    )
}