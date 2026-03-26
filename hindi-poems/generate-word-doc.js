const { Document, Packer, Paragraph, TextRun, HeadingLevel, PageBreak, AlignmentType } = require("docx");
const fs = require("fs");
const path = require("path");

// Read the catalog
const catalogPath = path.join(__dirname, "catalog.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));

console.log(`Loaded ${catalog.length} poems from catalog.`);

// Build the document sections
const children = [];

// ===== Title Page =====
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 4000 },
    children: [
      new TextRun({
        text: "Hindi Poems",
        bold: true,
        size: 72,
        font: "Arial",
      }),
    ],
  })
);

children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 400 },
    children: [
      new TextRun({
        text: "Audio Scripts",
        bold: true,
        size: 52,
        font: "Arial",
        color: "555555",
      }),
    ],
  })
);

children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 600 },
    children: [
      new TextRun({
        text: `Total Poems: ${catalog.length}`,
        size: 28,
        font: "Arial",
        color: "888888",
      }),
    ],
  })
);

children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200 },
    children: [
      new TextRun({
        text: `Generated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
        size: 24,
        font: "Arial",
        color: "888888",
      }),
    ],
  })
);

// Page break after title page
children.push(
  new Paragraph({
    children: [new PageBreak()],
  })
);

// ===== Each Poem =====
catalog.forEach((poem, index) => {
  const poemNumber = index + 1;

  // Heading: number + Hindi title + English title
  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({
          text: `#${poemNumber}. ${poem.title}`,
          bold: true,
          size: 36,
          font: "Arial",
        }),
      ],
    })
  );

  children.push(
    new Paragraph({
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: poem.titleEnglish,
          italics: true,
          size: 28,
          font: "Arial",
          color: "666666",
        }),
      ],
    })
  );

  // Metadata line
  children.push(
    new Paragraph({
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: `ID: ${poem.id}    |    Theme: ${poem.theme}`,
          size: 20,
          font: "Arial",
          color: "999999",
        }),
      ],
    })
  );

  // Separator
  children.push(
    new Paragraph({
      spacing: { before: 100, after: 200 },
      children: [
        new TextRun({
          text: "________________________________________",
          size: 20,
          color: "CCCCCC",
        }),
      ],
    })
  );

  // Verse lines - numbered
  poem.verses.forEach((verse, vIndex) => {
    const lineNum = vIndex + 1;
    children.push(
      new Paragraph({
        spacing: { before: 60, after: 60 },
        indent: { left: 720 },
        children: [
          new TextRun({
            text: `${lineNum}. `,
            bold: true,
            size: 24,
            font: "Arial",
            color: "444444",
          }),
          new TextRun({
            text: verse.line,
            size: 24,
            font: "Arial",
          }),
        ],
      })
    );
  });

  // Page break between poems (except after the last one)
  if (poemNumber < catalog.length) {
    children.push(
      new Paragraph({
        children: [new PageBreak()],
      })
    );
  }
});

// Create the document
const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1440,
            right: 1440,
            bottom: 1440,
            left: 1440,
          },
        },
      },
      children: children,
    },
  ],
});

// Generate and save
const outputPath = path.join(__dirname, "Hindi-Poems-Audio-Scripts.docx");

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Word document saved to: ${outputPath}`);
  console.log(`Total poems: ${catalog.length}`);
}).catch((err) => {
  console.error("Error generating document:", err);
  process.exit(1);
});
