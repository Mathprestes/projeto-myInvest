import "antd/dist/antd.css";
import { Table, Button, message, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvest() {

    const [investimentos] = useState([]);

    function remove(record){
        message.success('Investimento Removido com Sucesso!');
    }

    return(

        <div className="container">
            <Layout className="layout">
                <Header>
                
                <div className="logo" />

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/cadastrar-invest">
                        Cadastrar Investimento
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to="/listar-invest">
                        Listar Investimentos
                        </Link>
                    </Menu.Item>
                </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">

                    <h2> INVESTIMENTOS </h2>
                        <Table dataSource={investimentos}>
                            <Column title="Código do ativo"     dataIndex="codigoAtivo"     key="codigoAtivo" />
                            <Column title="Valor"               dataIndex="valor"           key="valor" />
                            <Column title="Quantidade de cotas" dataIndex="quantidadeCotas" key="quantidadeCotas" />
                            <Column title="Data da Compra"      dataIndex="dataCompra"      key="dataCompra" />
                            <Column title="Remover" key="atualizar"
                                render={(text, record) => (<Button OnClick={() => remove(record)}
                                type="primary"> Remover </Button>)}
                            />
                        </Table>

                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> My Invest App </Footer>
            </Layout>
        </div>
    );
}