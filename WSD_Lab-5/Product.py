from lxml import etree

# Load XML
xml_tree = etree.parse("lab5.xml")

# Load XSL
xsl_transform = etree.XSLT(etree.parse("lab5.2.xsl"))

# Apply XSLT transformation
html_tree = xsl_transform(xml_tree)

# Write transformed HTML to a file
with open("lab5.3.html") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))
