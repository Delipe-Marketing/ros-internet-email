import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
  Font,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head>
      <Font
          fontFamily="Montserrat"
          fallbackFontFamily="Verdana"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body style={{ fontFamily: 'Poppins' }} className="bg-[url('https://rosinternet.com.br/wp-content/uploads/2025/03/background.png')] bg-cover my-auto mx-auto relative w-full">
          <Container className="p-[20px] ">
            <Section className="mt-[32px]">
              <Row>
                <Column align="left" className='space-y-0' >
                  <Text className='text-white text-3xl'>Resumo da <b>fatura</b></Text>
                  <Row className='space-x-4'>
                    <Column><Text className='h-2 w-2 bg-[#00ff96] rounded-full'></Text></Column>
                    <Column><Text className='text-white text-sm uppercase'>Data de vencimento: xx/xx/xxxx</Text></Column>
                  </Row>
                  <Row className='space-x-4 -mt-4'>
                    <Column><Text className='h-2 w-2 bg-[#00ff96] rounded-full'></Text></Column>
                    <Column><Text className='text-white text-sm uppercase'>Valor da fatura: R$XXX,XX</Text></Column>
                  </Row>
                </Column>  
                <Column align="right">
                  <Img className='h-16' src="https://rosinternet.com.br/wp-content/uploads/2025/02/Logo.png" alt="teste" />
                </Column>  
              </Row>
            </Section>
            <Section className='bg-white relative mt-12 max-w-2xl mx-auto p-8 rounded-lg shadow-lg'>
              <Row>
                <Column align='left'>
                  <Text className='text-3xl text-start leading-widest'>Veja como<br></br> é <span className='text-[#190382] font-bold'>Fácil pagar<br></br></span> sua fatura:</Text>
                  <Button className='mt-4 border-2 text-[#8d8d8d] border-[#25ff98] border-solid p-3 rounded-full'>Escolha uma das opções abaixo:</Button>
                  <Section className='mt-8'>
                    <Row>
                      <Column align='center'>
                      <Row className='flex items-start justify-start'>
                        <Column align='left'>
                          <Row>
                            <Column><Text className='h-10 w-10 text-xl mr-12 flex justify-center items-center font-bold text-[#2f0787] bg-[#00ff96] rounded-full'>1.</Text></Column>
                            <Column><Text className='text-[#4c4c4c] px-2 text-sm uppercase'>QR Code PIx:</Text></Column>
                          </Row>
                        </Column>
                        <Column align='center' className='px-2'>
                          <Img src="https://rosinternet.com.br/wp-content/uploads/2025/02/qrexample.png" alt="" />
                        </Column>
                      </Row>
                      </Column>
                      <Column align='right'>
                      
                      </Column>
                    </Row>

                    <Row className='mt-8'>
                      <Column align='center'>
                      <Row className='flex items-start justify-start'>
                        <Column align='left'>
                          <Row className='flex'>
                            <Column><Text className='h-10 w-10 text-xl mr-12 flex justify-center items-center font-bold text-[#2f0787] bg-[#00ff96] rounded-full'>2.</Text></Column>
                            <Column><Text className='text-[#4c4c4c] px-2 text-sm text-start uppercase'>PIX Copia e cola:</Text></Column>
                          </Row>
                          <Text className='-mt-12 font-light text-[#979797]'>
                            00020101021226910014BR.GOV.BCB.PIX2569pixqrcode.sicredi.com.br/qr/v2/cobv/
                            c1b231e1fb434a82aa2f1587b0b99cc65204000053039865802BR5924ROS TELECOM 
                            COMUNICACOES6013Nao informado62070503***63046046
                          </Text>
                        </Column>
                      </Row>
                      </Column>
                      <Column align='right'>
                      </Column>
                    </Row>

                    <Row className='mt-8'>
                      <Column align='center'>
                      <Row className='flex items-start justify-start'>
                        <Column align='left'>
                          <Row className='flex'>
                            <Column><Text className='h-10 w-10 text-xl mr-12 flex justify-center items-center font-bold text-[#2f0787] bg-[#00ff96] rounded-full'>3.</Text></Column>
                            <Column><Text className='text-[#4c4c4c] px-2 text-sm text-start uppercase'>Código de barras:</Text></Column>
                          </Row>
                          <Text className='-mt-12 font-light text-[#979797]'>
                            74891.12537 03619.107281 26360.891076 1 99880000008990
                          </Text>
                        </Column>
                      </Row>
                      </Column>
                      <Column align='right'>
                      </Column>
                    </Row>

                    <Row className='mt-8'>
                      <Column align='center'>
                      <Row className='flex items-start justify-start'>
                        <Column align='left'>
                          <Row className='flex'>
                            <Column><Text className='h-10 w-10 text-xl mr-12 flex justify-center items-center font-bold text-[#2f0787] bg-[#00ff96] rounded-full'>4.</Text></Column>
                            <Column><Text className='text-[#4c4c4c] px-2 text-sm text-start uppercase'>Escolha a opção 4 do menu da Central de Atendimento:</Text></Column>
                          </Row>
                          <Text className='-mt-12 font-light text-[#979797]'>
                            2 Via do boleto
                          </Text>
                        </Column>
                      </Row>
                      </Column>
                      <Column align='right'>
                      </Column>
                    </Row>

                  </Section>
                </Column>
                <Column align='right' />
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: 'alanturing',
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: 'Alan',
  invitedByEmail: 'alan.turing@example.com',
  teamName: 'Enigma',
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '204.13.186.218',
  inviteFromLocation: 'São Paulo, Brazil',
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
