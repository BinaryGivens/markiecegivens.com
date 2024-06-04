import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle'; // Assuming you have a Particle component
import pdfFile from '../../Assets/../Assets/markiece-givens-resume.pdf'; // Assuming this is the correct path to your PDF file
import { AiOutlineDownload } from 'react-icons/ai';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = ({ pdf = pdfFile }) => {
    return (
        <>
            <div className="resume-container">
                <div className='resume-desc'>
                    <h>This is my resume. Feel free to download it</h>
                </div>
                <Particle/>
                <Button
                    className='res-btn'
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: '250px' }}
                >
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                </Button>
                <Document file={pdf} className="resume-pdf">
                    <Page pageNumber={1} />
                </Document>
                <Button
                    className='res-btn'
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: '250px' }}
                >
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                </Button>
            </div>
        </>
    );
}

export default Resume;
