import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, Title, Close,  ButtonContent } from './styles';
import axios from 'axios';
import { toast } from 'react-toastify';

export function ModalDeleteVaga({ vaga, getVagas }) {

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NDQyMzA0NSwiaWF0IjoxNjg0NDIzMDQ1fQ.3GDYc4YE0FhkUqz1vEaMAfASfbJbJll76yDt-h93fNo"
    
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    function handleCancel() {
        document.getElementById("closeModal").click();
    }

    function handleDelete() {
        axios.delete(`https://code-recrute.onrender.com/vacancies/${vaga.id}`, config)
        .then(() => {
          toast.success("Vaga deletada com sucesso")
          if (getVagas) {
            getVagas();
          }
        });
    }

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Close asChild>
                        <button id="closeModal" aria-label="Close">
                            x
                        </button>
                    </Close>
                    <Title>Deseja realmente excluir a vaga {vaga.title} ?</Title>
                    <ButtonContent>
                        <button onClick={handleDelete}>Sim</button>
                        <button onClick={handleCancel}>Não</button>
                    </ButtonContent>
                </Content>
            </Overlay>
        </Dialog.Portal>
    );
}