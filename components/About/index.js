import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Icon,
  Badge,
  Link,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiTypescript,
  SiSqlite,
  SiNextdotjs,
  SiGit,
  SiCypress,
  SiGmail,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { MdMobileFriendly } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { GiJesterHat } from "react-icons/gi";

export default function About() {
  return (
    <Flex direction="column">
      <Box marginBottom="50px">
        <Box marginBottom="40px">
          <Heading id="about" marginBottom="30px" size="3xl">
            Sobre mi
          </Heading>
          <Text lineHeight="7">
            Hola! Me llamo Juan Avero y tengo 18 años. Con el tiempo libre que
            tenia en la cuarentena ( y las ganas de probar algo nuevo! ),
            comence a aprender programacion, en marzo de 2020. <br /> <br />
            Con el tiempo me fui dando cuenta que es algo que me gusta y
            disfruto hacer en mis tiempos libres, asi que decidi seguir
            aprendiendo las tecnologias que me parecen interesantes junto con
            buenas practicas, para poder ir aplicando a mis proyectos
            personales. <br /> <br />
            Algunas de las tecnologias que trabaje, aprendi, y sigo aprendiendo
            son:
          </Text>
        </Box>
        <Box marginBottom="40px">
          <Stack
            marginBottom="30px"
            spacing="auto"
            direction={{ sm: "column", lg: "row" }}
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">CSS3</Text>
              <Icon fontSize="50px" as={SiCss3} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">HTML5</Text>
              <Icon fontSize="50px" as={SiHtml5} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">JavaScript</Text>
              <Icon fontSize="50px" as={SiJavascript} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">React</Text>
              <Icon fontSize="50px" as={SiReact} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Node JS</Text>
              <Icon fontSize="50px" as={SiNodedotjs} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Express</Text>
              <Icon fontSize="50px" as={SiExpress} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Next JS</Text>
              <Icon fontSize="50px" as={SiNextdotjs} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">TypeScript</Text>
              <Icon fontSize="50px" as={SiTypescript} />
            </Box>
          </Stack>
        </Box>
        <Box marginBottom="40px">
          <Heading id="about" marginBottom="30px" size="xl">
            Otros
          </Heading>
          <Stack spacing="auto" direction={{ sm: "column", lg: "row" }}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Responsive Design</Text>
              <Icon fontSize="50px" as={MdMobileFriendly} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Rest API</Text>
              <Icon fontSize="50px" as={AiFillApi} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Relational Database</Text>
              <Icon fontSize="50px" as={SiSqlite} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Git </Text>
              <Icon fontSize="50px" as={SiGit} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Cypress</Text>
              <Icon fontSize="50px" as={SiCypress} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text marginBottom="10px">Jest</Text>
              <Icon fontSize="50px" as={GiJesterHat} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box width="100%">
        <Box marginBottom="40px">
          <Heading id="proyectos" marginBottom="30px" size="3xl">
            Proyectos
          </Heading>
          <Stack width="100%">
            <Box bg="white" borderRadius="md" padding="5">
              <Heading color="dark.background" marginBottom="20px" size="md">
                Agencia de alquiler de autos
              </Heading>
              <Text color="dark.background" marginBottom="20px">
                Una aplicacion que funciona como panel de back-office para una
                agencia de alquiler de autos. Permite cargar informacion de
                autos, clientes, y crear alquileres a partir de estos. <br />{" "}
                <br />
                Ver en{" "}
                <Link
                  href="https://github.com/jjuannn/car-rental-agency"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  GitHub
                </Link>
                <br />
                Ver{" "}
                <Link
                  href="https://car-rental-agency.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  demo
                </Link>
              </Text>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                spacing="2"
                marginBottom="15px"
              >
                <Badge width="fit-content" colorScheme="purple">
                  TypeScript
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  React
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Node (Express)
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  PostgreSQL
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Sequelize
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Chakra UI
                </Badge>
              </Stack>
              <Image marginBottom="15px" src="/caragency.gif" alt="" />
            </Box>
            <Box bg="white" borderRadius="md" padding="5">
              <Heading color="dark.background" marginBottom="20px" size="md">
                Best Advice
              </Heading>
              <Text color="dark.background" marginBottom="20px">
                Una aplicacion tipo blog, pensada para que la gente publique sus
                problemas o inquietudes, y la gente pueda responder a estos.
                Cuenta con un sistema de registro y autenticacion, y la
                posibilidad de crear, borrar y comentar posts. <br /> <br />
                Ver en{" "}
                <Link
                  href="https://github.com/jjuannn/best-advice"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  GitHub
                </Link>
                <br />
                Ver{" "}
                <Link
                  href="http://best-advice.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  demo
                </Link>
              </Text>
              <Stack
                marginBottom="15px"
                direction={{ sm: "column", lg: "row" }}
                spacing="2"
              >
                <Badge width="fit-content" colorScheme="purple">
                  React
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Next JS
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Firebase
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Chakra UI
                </Badge>
              </Stack>
              <Image src="/bestadvice.gif" alt="" />
            </Box>
            <Box bg="white" borderRadius="md" padding="5">
              <Heading color="dark.background" marginBottom="20px" size="md">
                Rewards Store
              </Heading>
              <Text color="dark.background" marginBottom="20px">
                Rewards Store. Simula una tienda de recompensas en la que podes
                canjear tus puntos. Consume su API de productos y los muestra
                para poder canjear los productos. <br /> <br />
                Ver en{" "}
                <Link
                  href="https://github.com/jjuannn/aerolab-challenge-v2"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  GitHub
                </Link>
                <br />
                Ver{" "}
                <Link
                  href="http://aerolab-challenge-v2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  demo
                </Link>
              </Text>
              <Stack
                marginBottom="15px"
                direction={{ sm: "column", lg: "row" }}
                spacing="2"
              >
                <Badge width="fit-content" colorScheme="purple">
                  React
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Redux
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Emotion
                </Badge>
              </Stack>
              <Image src="/aerolab.gif" alt="" />
            </Box>
            <Box bg="white" borderRadius="md" padding="5">
              <Heading color="dark.background" marginBottom="20px" size="md">
                PC Discounts App
              </Heading>
              <Text color="dark.background" marginBottom="20px">
                Aplicacion que consume la API de CheapShark para ver los
                descuentos de los juegos de Steam. Incluye paginacion, y permite
                filtrar por nombre y precios.
                <br /> <br />
                Ver en{" "}
                <Link
                  href="https://github.com/jjuannn/pc-discounts-app"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  GitHub
                </Link>
                <br />
                Ver{" "}
                <Link
                  href="http://pc-discounts-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  color="purple"
                  fontWeight="bold"
                >
                  demo
                </Link>
              </Text>
              <Stack
                marginBottom="15px"
                direction={{ sm: "column", lg: "row" }}
                spacing="2"
              >
                <Badge width="fit-content" colorScheme="purple">
                  React
                </Badge>
                <Badge width="fit-content" colorScheme="purple">
                  Emotion
                </Badge>
              </Stack>
              <Image src="/discount.gif" width="100%" alt="" />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box width="100%">
        <Box marginBottom="40px">
          <Heading id="contacto" marginBottom="30px" size="3xl">
            Contacto
          </Heading>
          <Flex direction="column">
            <Box borderRadius="md" padding="5">
              <Flex
                justifyContent="space-around"
                direction={{ sm: "column", lg: "row" }}
                spacing="2"
                marginBottom="15px"
              >
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Text marginBottom="10px">
                    <Link
                      href="https://github.com/jjuannn"
                      target="_blank"
                      rel="noreferrer"
                      color="purple"
                      fontWeight="bold"
                    >
                      GitHub
                    </Link>
                  </Text>
                  <Icon fontSize="50px" as={SiGithub} />
                </Box>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Text marginBottom="10px">
                    <Link
                      href="mailto:correo@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      color="purple"
                      fontWeight="bold"
                    >
                      Gmail
                    </Link>
                  </Text>
                  <Icon fontSize="50px" as={SiGmail} />
                </Box>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Text marginBottom="10px">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      color="purple"
                      fontWeight="bold"
                    >
                      LinkedIn
                    </Link>
                  </Text>
                  <Icon fontSize="50px" as={SiLinkedin} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
