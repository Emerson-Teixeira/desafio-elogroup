/* eslint-disable no-unused-vars */
import Header from "../../components/header";
import {
  Container,
  PanelWrapper,
  CustomButton,
  PanelTableWrapper,
} from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { getLeads, saveArrayLeads } from "../../utils/LeadsManager";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Column from "../../components/Column";
import columnType from "../../assets/staticData/status";
export default function Painel(props) {
  const [dataCards, setDataCards] = useState(getLeads());
  function changeStatus(index, newStatus) {
    setDataCards((prevState) => {
      return prevState.map((element, indexElement) => {
        if (index === indexElement) {
          return {
            ...element,
            status: newStatus,
          };
        } else
          return {
            ...element,
          };
      });
    });
  }
  useEffect(() => {
    saveArrayLeads(dataCards);
  }, [dataCards]);
  return (
    <Container>
      <Header history={props.history} title="Painel de Leads" />
      <PanelWrapper>
        <CustomButton onClick={(e) => props.history.push("/create")}>
          <BsPlusCircle />
          Novo Lead
        </CustomButton>
        <PanelTableWrapper>
          {columnType.map((element, index) => {
            return (
              <Column key={index} name={element.tipo} status={element.status}>
                {dataCards.map((elementCards, indexCard) => {
                  if (elementCards.status === element.status) {
                    return (
                      <Card
                        key={indexCard}
                        name={elementCards.name}
                        email={elementCards.email}
                        oportunidades={elementCards.oportunidades}
                        phone={elementCards.phone}
                        status={elementCards.status}
                        index={indexCard}
                        changeStatus={changeStatus}
                      />
                    );
                  } else {
                    return "";
                  }
                })}
              </Column>
            );
          })}
        </PanelTableWrapper>
      </PanelWrapper>
    </Container>
  );
}
