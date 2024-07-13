import React from 'react'

export const PPT = () => {
    function handleDownload(member, number) {
        const fileUrl = `./public/Velada ${number}/${member}.pptx`;
        const fileName = `${member}.pptx`;
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = fileName;
        anchor.click();
        anchor.remove();
        console.log(`Downloaded:    assets/Velada ${number}/${member}.pptx`)
    };


    return (
        <section className='ppt'>
            <h2>PPT</h2>
            <h3>Velada 1</h3>
            <ul>
                <li>
                    <p>Alexis</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%201.png?alt=media&token=f3096008-e227-4b7f-8eb1-9fa31df7f655&_gl=1*c6033q*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkxOTIxNS41LjEuMTY5NjkxOTIyNC41MS4wLjA." title="Alexis 1" alt="Alexis 1" />
                </li>
                <li>
                    <p>Farge</p>
                    <img onClick={() => handleDownload('Farge', 1)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%201.png?alt=media&token=fef6e9ac-2679-4346-af6e-43d631d155ed&_gl=1*1c4c0jw*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkwOTI2My4xOS4wLjA." title="Farge 1" alt="Farge 1" />
                </li>
                <li>
                    <p>Mapache</p>
                    <img onClick={() => handleDownload('Mapache', 1)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Mapache%201.png?alt=media&token=dd1dadfe-f262-4fd2-a190-9bfeafa98e9b&_gl=1*ybinrh*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDAyMS4yOC4wLjA." title="Mapache 1" alt="Mapache 1" />
                </li>
                <li>
                    <p>Portal</p>
                    <img onClick={() => handleDownload('Portal', 1)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%201.png?alt=media&token=daa29a76-da44-4d3e-8b41-215ec52f53f9&_gl=1*58u7u3*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDA0MS44LjAuMA.." title="Portal 1" alt="Portal 1" />
                </li>
            </ul>
            <h3>Velada 2</h3>
            <ul>
                <li>
                    <p>Alexis</p>
                    <img onClick={() => handleDownload('Alexis', 2)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%202.png?alt=media&token=74fe10d4-3ddf-4d92-83e7-60ea800e8fce&_gl=1*pxpepv*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDAwOS40MC4wLjA." title="Alexis 2" alt="Alexis 2" />
                </li>
                <li>
                    <p>Farge</p>
                    <img onClick={() => handleDownload('Farge', 2)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%202.png?alt=media&token=6b574e37-e75f-456b-8720-cecf36069bd5&_gl=1*tdd6ze*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkwOTk4OS42MC4wLjA." title="Farge 2" alt="Farge 2" />
                </li>
                <li>
                    <p>Mapache</p>
                    <img onClick={() => handleDownload('Mapache', 2)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Mapache%202.png?alt=media&token=406479c3-3098-40f9-ba2d-5fb05c7a7d65&_gl=1*199alnv*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDAzNC4xNS4wLjA." title="Mapache 2" alt="Mapache 2" />
                </li>
                <li>
                    <p>Portal</p>
                    <img onClick={() => handleDownload('Portal', 2)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%202.png?alt=media&token=4d31d7d0-1181-44fa-a069-f73dddd97545&_gl=1*s195nv*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDA1MS42MC4wLjA." title="Portal 2" alt="Portal 2" />
                </li>
            </ul>
            <h3>Velada 3</h3>
            <ul>
                <li>
                    <p>Alexis</p>
                    <img onClick={() => handleDownload('Alexis', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%203.png?alt=media&token=ca285c1c-2729-4a5c-97cf-9a017d04d960" title="Alexis 3" alt="Alexis 3" />
                </li>
                <li>
                    <p>Farge</p>
                    <img onClick={() => handleDownload('Farge', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%203.png?alt=media&token=a765e987-3ff3-4689-b100-e0c49892b2f6" title="Farge 3" alt="Farge 3" />
                </li>
                <li>
                    <p>Mapache</p>
                    <img onClick={() => handleDownload('Mapache', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Mapache%203.png?alt=media&token=cae5e7ba-737c-416e-9aff-655d7374ed4c" title="Mapache 3" alt="Mapache 3" />
                </li>
                <li>
                    <p>Portal</p>
                    <img onClick={() => handleDownload('Portal', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%203.png?alt=media&token=383ef242-26af-4aa2-b64f-d362935c1d73" title="Portal 3" alt="Portal 3" />
                </li>
            </ul>
            <h3>Velada 4</h3>
            <ul>
                <li>
                    <p>Alexis</p>
                    <img onClick={() => handleDownload('Alexis', 4)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%204.png?alt=media&token=ab3314c8-6c80-4c3a-9e16-ee0d02e4f1d5" title="Alexis 4" alt="Alexis 4" />
                </li>
                <li>
                    <p>Farge</p>
                    <img onClick={() => handleDownload('Farge', 4)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%204.png?alt=media&token=22f33e6e-d6a1-4911-9130-4e421bb66dc8" title="Farge 4" alt="Farge 4" />
                </li>
                <li>
                    <p>Mapache</p>
                    <img onClick={() => handleDownload('Mapache', 4)} src="" title="Mapache 4" alt="Mapache 4" />
                </li>
                <li>
                    <p>Portal</p>
                    <img onClick={() => handleDownload('Portal', 4)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%204.png?alt=media&token=ad1c1924-0026-4e50-9fea-a6f9de83b54c" title="Portal 4" alt="Portal 4" />
                </li>
            </ul>
        </section>
    )
}
