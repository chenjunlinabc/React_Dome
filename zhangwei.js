export default function Home() {
  const { Title, Paragraph, Text, Link } = Typography
  let titleData = "张威"
  const list_arrs1 = [
    {id: 1,text: "Adobe Photoshop"},
    {id: 2,text: "Adobe illustrator"},
    {id: 3,text: "Word"},
    {id: 4,text: "CoreIDRAW"},
    {id: 5,text: "Java web"},
    {id: 6,text: "HTNL/CSS"},
  ]
  const list_arrs2 =[
    {id: 1,text: "Ps高级证书"},
    {id: 2,text: "局域网中级证书"},
  ]
  return (
    <div className="main">
      <Head>
        <title>{titleData}</title>
        <meta name="description" content="hallo" />
        <link rel="icon" href="https://chenjunlin.me/favicon.ico" />
      </Head>
      <Row justify="center">
        <Col span={10}>
          <main>
              <Typography>
                <Title level={3}>个人简历</Title>
                <Paragraph>
                  hello，我叫张威，就读于广东省高新高级技工学校（计算机网络应用-高技，2017.9-2022.6 ）  
                  <br></br>
                  荣誉/奖项:在我校的第九届技能节网络资源共享比赛中，荣誉获得了第三名，还有各种优秀奖项
                  <br></br>
                  主修课程:《photoshop》、《CorelDRAW》、《Word办公软件》、《Adobe lllustrator》
                  
                </Paragraph>
                <Paragraph>
                    <ul>
                      <li>
                        Email: <a href="mailto:2995487624@qq.com">2995487624@qq.com</a> 
                      </li>
                      <li>
                        Phone: 18022496881
                      </li>
                      
                    </ul> 
                </Paragraph>
                <Paragraph>
                  <div>证书:</div>
                  <br></br>
                      <div>
                        <ul>
                          {list_arrs2.map(item => <li key={item.id}>{item.text}</li>)}
                        </ul>
                  </div>
                </Paragraph>
                <Paragraph>
                    <Divider orientation="left">技能</Divider>
                    <div>
                      <ul>
                          {list_arrs1.map(item => <li key={item.id}>{item.text}</li>)}
                      </ul>
                    </div>
                    <div>
                      能力描述:
                    </div>
                    <br></br>
                    <Text>
                    熟练操作Wordexcel能独立操作并及时高效的完成日常办公文档的编辑工作。以上主修课程都能独立熟练的操作。

                    </Text>

                </Paragraph>
                <Paragraph>
                  <Divider orientation="left">经历</Divider>
                    <div>实习经历:</div>
                    <br></br>
                    <Text>
                      五矿崇文金城有限公司 日常的办公文档的编辑工作 2021.1.16-2021.3.2 
                      在校的高技第三年寒假在中国五矿集团有限公司分公司参加过社会实践，实践的工作内容主要是日常
                      的办公文档的编辑工作。
                    </Text>
                    <br></br>
                    <br></br>
                    <div>
                      校园经历:
                    </div>
                    <br></br>

                    <Text>
                    在校期间担任学生会舍管一职负责管理楼栋寝室内的水、电和财产，不浪费、不损坏，防止事故发
                    生，对学生在宿舍的行为习惯和就宴纪律进行管理。在班级担任职务劳动委员，主要角责管理班级工
                    生跟安排同学值日时间，创造美好的学习环境。还拿到过多次文明班级称号。也经常参加学校领导组织的各项活动。
                    </Text>
                </Paragraph>
                <Paragraph>
                  <Divider orientation="left">自我评价</Divider>
                  <Text>
                  有良好的工作习惯，习惯每日写工作日志，总结项目经验，努力补充专业知识。
                  本人为人诚恳热情，勤奋好学、积极进取、团队意识强，具有实事求是严谨的科学精神。专业基础知识扎实、熟练运用计算机常用软件与开发工具，执行力强、富有责任心:
                  ·抗压能力良好
                  </Text>
                </Paragraph>
              </Typography>
          </main>
        </Col>
      </Row>
    </div>
  )
}
