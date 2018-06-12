const fs = require('fs')

module.exports = (stats) => {
  const template = `
# Wirkstoffe

**ATC** steht für **Anatomic-Therapeutic Classification**. Im ATC-Klassifikationssystem werden Wirkstoffe hierarchisch gruppiert. Es existieren 5 verschiedene "Level". Das Prinzip wird am Beispiel Metformin, einem oralen Antidiabetikum, dargestellt:

| ATC-Code |  Level | Erklärung| Beispiel | Anzahl |
|-------|---------|----------|----------|----------|
| **A** | 1st level | anatomical main group | **Alimentary tract and metabolism**  | ${stats['1']}
| **A10**	| 2nd level | therapeutic subgroup | **Drugs used in diabetes** | ${stats['3']}
| **A10B** | 3rd level | pharmacological subgroup | **Blood glucose lowering drugs, excl. insulins** | ${stats['4']}
| **A10BA** | 4th level | chemical subgroup | **Biguanides** | ${stats['5']}
| **A10BA02** | 5th level | chemical substance | **Metformin** | ${stats['7']}


Unsere Liste der ATC-Codes enthält alle ATC-Codes mit den dazugehörigen Wirkstoffbezeichnungen, welche zur Klassifikation der in der Schweiz zugelassenen Artikeln angewendet werden.

Die Grundlage der gelisteten ATC-Codes sind die von der Swissmedic herausgegebenen Codes. 
Für den Fall, dass Swissmedic einem Artikel nur einen 4- oder 5-stelligen ATC-Code zuteilt und für den Wirkstoff des Präparates ein offizieller 7-stelliger Code existiert (z.B. publiziert durch die WHO) kann dieser stattdessen übernommen werden. Existiert kein offizieller ATC-Code werden falls nötig für einzelne Wirkstoffe 7-stellige ACT-Codes kreiert.
`
  fs.appendFile('docs/wirkstoffe.md', template, (err) => {
    if (err) throw err
    console.log('wirkstoffe.md done')
  })

}