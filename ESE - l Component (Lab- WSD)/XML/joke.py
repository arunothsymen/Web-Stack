from lxml import etree
xml_tree = etree.parse("joke.xml")
xsl_transform = etree.XSLT(etree.parse("joke.xsl"))
html_tree = xsl_transform(xml_tree)
with open("joke.html") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))