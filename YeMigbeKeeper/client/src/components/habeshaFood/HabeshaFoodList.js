import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HabeshaFoodContext } from "./HabeshaFoodProvider";
import HabeshaFood from "./HabeshaFoodCard";
import { Row, Col, Container, Button } from "react-bootstrap";

const HabeshaFoodList = () => {
    const { habeshaFoods, getAllHabeshaFoods } = useContext(HabeshaFoodContext);

    const history = useHistory()

    useEffect(() => {
        getAllHabeshaFoods()
    }, []);

    // Maps through each habesh food object, sending 
    // them to be converted to HTML then prints them all out.
    return (
        <Container>
            <Button variant="danger" style={{ margin: "10px" }} onClick={() => { history.push("/HabeshaFood/create") }}>Add habesha food</Button>
            <Row>
                {habeshaFoods.map((habeshaFoodObj) => (
                    <Col md="4"><HabeshaFood key={habeshaFoodObj.id} habeshaFood={habeshaFoodObj} /></Col> //habeshaFood is our parameter(object) in HabeshaFoodCard
                ))}
            </Row>
        </Container>
    );
};

export default HabeshaFoodList;
