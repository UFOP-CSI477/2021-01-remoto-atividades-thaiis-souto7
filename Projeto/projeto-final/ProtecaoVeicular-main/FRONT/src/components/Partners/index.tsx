import Baterias from "../../assets/Baterias.png"
import Chaveiro from "../../assets/Chaveiro.png"
import Hospedagem from "../../assets/Hospedagem.png"
import Mecanico from "../../assets/Mecanico.png"
import Pneu from "../../assets/Pneu.png"
import Reboque from "../../assets/Reboque.png"

import {
    PartnersContainer,
    PartnersImages,
    Informations,
} from './styles';

export function Partners() {
    return (

        <PartnersContainer id="Partners">
            <h1>PARCEIROS</h1>
            <PartnersImages>
                <Informations>
                <img src={Baterias} width="190" alt="Baterias" />
                <h3>Troca de Bateria</h3>
                <h4>(31) 3232-3232</h4>
                </Informations>
                <Informations>
                <img src={Chaveiro} width="190" alt="Chaveiro" />
                <h3>Chaveiro</h3>
                <h4>(31) 3030-3030</h4>
                </Informations>
                <Informations>
                <img src={Hospedagem} width="190" alt="Hospedagem" />
                <h3>Hospedagem</h3>
                <h4>(31) 3434-3434</h4>
                </Informations>
            </PartnersImages>

            <PartnersImages>
                <Informations>
                <img src={Mecanico} width="190" alt="Mecanico" />
                <h3>Serviço Mecânico</h3>
                <h4>(31) 3131-3131</h4>
                </Informations>
                <Informations>
                <img src={Pneu} width="190" alt="Pneu" />
                <h3>Troca de Pneu </h3>
                <h4>(31) 3333-3333 </h4>
                </Informations>
                <Informations>
                <img src={Reboque} width="190" alt="Reboque" />
                <h3>Reboque</h3>
                <h4>(31) 2525-2525 </h4>
                </Informations>
            </PartnersImages>
        
        </PartnersContainer>

    );
}
