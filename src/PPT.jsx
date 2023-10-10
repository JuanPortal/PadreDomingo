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
                    <img onClick={() => handleDownload('Alexis', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/TBA.png?alt=media&token=62930d1f-8edb-4b38-b466-e054782fb1c9&_gl=1*6y2a2w*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDA2Mi40OS4wLjA." title="Alexis 3" alt="Alexis 3" />
                </li>
                <li>
                    <p>Farge</p>
                    <img onClick={() => handleDownload('Farge', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/TBA.png?alt=media&token=62930d1f-8edb-4b38-b466-e054782fb1c9&_gl=1*6y2a2w*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDA2Mi40OS4wLjA." title="Farge 3" alt="Farge 3" />
                </li>
                <li>
                    <p>Mapache</p>
                    <img onClick={() => handleDownload('Mapache', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/TBA.png?alt=media&token=62930d1f-8edb-4b38-b466-e054782fb1c9&_gl=1*6y2a2w*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDA2Mi40OS4wLjA." title="Mapache 3" alt="Mapache 3" />
                </li>
                <li>
                    <p>Portal</p>
                    <img onClick={() => handleDownload('Portal', 3)} src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/TBA.png?alt=media&token=62930d1f-8edb-4b38-b466-e054782fb1c9&_gl=1*6y2a2w*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwNzY2NC4zLjEuMTY5NjkxMDA2Mi40OS4wLjA." title="Portal 3" alt="Portal 3" />
                </li>
            </ul>
        </section>
    )
}
