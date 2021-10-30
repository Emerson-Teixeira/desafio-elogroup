import Header from "../../components/header";
import {
  Container,
  PanelWrapper,
  CustomButton,
  PanelTableWrapper,
} from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { getLeads } from "../../utils/LeadsManager";
import { useState } from "react";
import Card from "../../components/Card";
export default function Painel(props) {
  const [dataCards, setDataCards] = useState(getLeads());
  return (
    <Container>
      <Header history={props.history} title="Painel de Leads" />
      <PanelWrapper>
        <CustomButton onClick={(e) => props.history.push("/create")}>
          <BsPlusCircle />
          Novo Lead
        </CustomButton>
        <PanelTableWrapper>
          {dataCards.map((Element, index) => {
            return (
              <Card
                key={index}
                name={Element.name}
                email={Element.email}
                oportunidades={Element.oportunidades}
                phone={Element.phone}
                status={Element.status}
              />
            );
          })}
        </PanelTableWrapper>
      </PanelWrapper>
    </Container>
  );
}
