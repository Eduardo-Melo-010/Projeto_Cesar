import './CadastroPaciente.css';
import Sidebar from './Sidebar.jsx';
import { useState } from 'react';

function CadastroPaciente() {
  const [mostrarLinguagens, setMostrarLinguagens] = useState(false);

  const toggleLinguagens = () => {
    setMostrarLinguagens(!mostrarLinguagens);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="form-container">
        <form>
          <fieldset>
            <h3>Cadastro de Paciente</h3>

            <label>Nome Completo <span className="obrigatorio">*</span>
              <input type="text" name="nome" placeholder="Insira o nome do paciente" required />
            </label>

            <label>Matrícula ou CPF <span className="obrigatorio">*</span>
            <input type="text" name="matricula_ou_CPF" placeholder="Insira a matrícula ou o CPF"/>
            </label>

            <label>Data de Nascimento <span className="obrigatorio">*</span>
              <input type="date" name="data_nascimento" required />
            </label>

            <label> Nome do Responsável <span className="obrigatorio">*</span>
              <input type="text" name="NomeResponsavel" placeholder="Nome do Responsável (caso seja menor de idade)" required />
            </label>

            <label>Telefone <span className="obrigatorio">*</span>
              <input type="tel" name="telefone" placeholder="(99)99999-9999" required />
            </label>

            <label>E-mail <span className="obrigatorio">*</span>
              <input type="email" name="email" placeholder="Insira seu e-mail" required />
            </label>
            
            <label>Tipo de Vínculo
              <select name="TipoDeVinculo">
                <option>Aluno</option>
                <option>Profissinal do Cesar</option>
                <option>Outros</option>
              </select>
              <textarea name="mensagem" placeholder="Se a escolha foi outros, informe o tipo de vínculo." required></textarea>
            </label>
           

            <label>Protótipo (Requisitos)
              <input type="file" name="prototipo" />
            </label>

            <label>As linguagens que você prefere?</label>
            <button type="button" className="toggle-btn" onClick={toggleLinguagens}>Mostrar / Ocultar</button>

            {mostrarLinguagens && (
              <div className="toggle-content" id="linguagensDiv">
                <select name="linguagens" multiple size="5">
                  <option>Java</option>
                  <option>C</option>
                  <option>C++</option>
                  <option>PHP</option>
                  <option>Python</option>
                  <option>JavaScript</option>
                </select>
                <br />
                <small>(Para fazer várias escolhas, mantenha a tecla CTRL pressionada)</small>
              </div>
            )}

            <label>Banco de Dados</label>
            <div className="inline-radio">
              <label><input type="radio" name="banco" value="MySQL" defaultChecked /> MySQL</label> |
              <label><input type="radio" name="banco" value="Postgresql" /> Postgresql</label> |
              <label><input type="radio" name="banco" value="MongoDB" /> MongoDB</label> |
              <label><input type="radio" name="banco" value="NA" /> N/A</label> |
              <label><input type="radio" name="banco" value="Outro" /> Outra</label>
            </div>

            <div className="inline-radio">
              <label>Turno para Reuniões <span className="obrigatorio">*</span></label> |
              <label><input type="checkbox" name="turno" value="manha" /> Manhã</label> |
              <label><input type="checkbox" name="turno" value="tarde" /> Tarde</label> |
              <label><input type="checkbox" name="turno" value="noite" /> Noite</label>
            </div>

            <label>Horário Sugerido
              <input type="time" name="horario" />
            </label>

            <br /><br />
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
            <p><span className="obrigatorio">*</span> Campos Obrigatórios</p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default CadastroPaciente;

