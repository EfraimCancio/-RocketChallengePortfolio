import React from 'react';
import './ProjectCards.css';

//images
import Folder from '../../images/folder.png';
import Star from '../../images/star.png';
import Git from '../../images/git-branch.png'
const ProjectCards = () => {
  return (
    <div className="cards-container">
        <div className="card">
            <div className="card-header">
                <img src={Folder} alt="Titulo do projeto" />
                <p>my-onix</p>
            </div>
            <div className="card-body">
                <p>Consulte as mensagens de erro que aparecem no painel do seu veículo Onix.</p>
            </div>
            <div className="card-footer">
                <div className="l-footer">
                    <div className="stars">
                        <img src={Star} alt="Estrelas" />
                        <p>100</p>
                    </div>
                    <div className="stars">
                        <img src={Git} alt="Git branch" />
                        <p>100</p>
                    </div>
                </div>
                <div className="r-footer">
                    <div className="lenguage">
                        <div className="signal"></div>
                        <p>Javascript</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <img src={Folder} alt="Titulo do projeto" />
                <p>my-onix</p>
            </div>
            <div className="card-body">
                <p>Consulte as mensagens de erro que aparecem no painel do seu veículo Onix.</p>
            </div>
            <div className="card-footer">
                <div className="l-footer">
                    <div className="stars">
                        <img src={Star} alt="Estrelas" />
                        <p>100</p>
                    </div>
                    <div className="stars">
                        <img src={Git} alt="Git branch" />
                        <p>100</p>
                    </div>
                </div>
                <div className="r-footer">
                    <div className="lenguage">
                        <div className="signal"></div>
                        <p>Javascript</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards