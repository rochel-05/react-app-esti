import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import {FaHome, FaSchool, FaGem, FaBook, FaFileContract, FaTools, FaAdjust} from 'react-icons/fa';
import {FaLock, FaUserAlt} from 'react-icons/fa';
import {FcDocument, FcSignature} from 'react-icons/fc'
//slide - stack - elastic - bubble - push - pushRotate - scaleDown - scaleRotate - fallDown - reveal

export default props => {
  return (
        <Menu>
            <span><Link to='/' className="menu-item"><FaGem/> Dashboard Admin</Link></span>
            <Link to='/' className="menu-item"><FaHome/> Home</Link>
            <Link to='/enseignants' className="menu-item"><FaSchool/> Enseignant</Link>
            <Link to="/modules" className="menu-item"><FaFileContract/> Module</Link>
            <Link to="/syllabuss" className="menu-item"><FcDocument/> Syllabus</Link>
            <Link to="/ues" className="menu-item"><FaAdjust/> Ue</Link>
            <Link to="/contrats" className="menu-item"><FcSignature/> Contrat</Link>
            <Link to="/avenants" className="menu-item"><FaBook/> Avenant</Link><hr/>
            <Link to="/" className="menu-item"><FaTools/> Setting</Link>
            <Link to="/users" className="menu-item"><FaUserAlt/> Users</Link>
            <Link to="/authentification" className="menu-item"><FaLock/> Logout</Link>
        </Menu>
  );
};