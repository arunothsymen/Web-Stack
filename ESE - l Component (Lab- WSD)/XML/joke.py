from lxml import etree
xml_tree = etree.parse("xml/joke.xml")
xsl_transform = etree.XSLT(etree.parse("xml/joke.xsl"))
html_tree = xsl_transform(xml_tree)
with open("symen.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))
