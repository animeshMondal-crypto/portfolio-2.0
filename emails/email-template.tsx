import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export default function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Message from portfolio</Preview>
      <Section>
        <Row>
          <Heading as="h2">Message from {email}</Heading>
        </Row>
        <Row>
          <Text>{message}</Text>
        </Row>
      </Section>
    </Html>
  );
}
