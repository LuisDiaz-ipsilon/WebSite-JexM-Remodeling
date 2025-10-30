
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>JexM Remodeling</h2>
              <div>
                <a target="_blank " href="">
                  Jiucel Marketing
                </a>
              </div>
              {/* <div>
                <a href="">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
              <div>
                <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                  Awesome Ant Design
                </a>
              </div> */}
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            {/* <div className="footer-center">
              <h2>资源链接</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> - </span>
                脚手架市场
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> - 应用框架
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli</a> -
                开发工具
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">Ant Motion</a>
                <span> - </span>
                设计动效
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">AntD Library</a>
                <span> - </span>
                Axure 部件库
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                <span> - </span>
                页面逻辑素材
              </div>
            </div> */}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            {/* <div className="footer-center">
              <h2>社区</h2>
              <div>
                <a href="/changelog">
                  更新记录
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ">
                  常见问题
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                  在线讨论 (中文)
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design-english">
                  在线讨论 (English)
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://new-issue.ant.design/">
                  报告 Bug
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/issues">
                  讨论列表
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/questions/tagged/antd">
                  StackOverflow
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://segmentfault.com/t/antd">
                  SegmentFault
                </a>
              </div>
            </div> */}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                Contact
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">Instagram</a>
                <span> - </span>
                intagramLink
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">Phone</a>
                <span> - </span>
                Phone
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              Telephone
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Copyright © 2025</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
