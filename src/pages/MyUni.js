import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';

import TabContainer from '../components/common/TabContainer';
import BoxTitle from '../components/common/BoxTitle';
import Image from '../components/common/Image';
import PageLayout from './PageLayout';

const myUniIntroduction = () => {
    return (
        <Box sx={{textAlign: 'left'}}>
            <BoxTitle>MyUni</BoxTitle>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Image alt="entire_diagram" src="img/myuni_diagram_230207.png" />
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{ mt: 6, mb: 2 }}>
                        학교 밖 청소년들의 대입 준비 과정은 고등학교에 재학 중인 학생들보다 많이 복잡합니다.
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        먼저 검정고시 출신자 지원이 가능한 대학을 구분하고, 대학마다 다른 검정고시 성적 내신 환산 방식을 정리해야 합니다. 심지어는 환산표를 공개하지 않는 대학도 많아 꼼꼼하게 따져봐야 하는데, 이에 더해 학교 밖 청소년 전형 선택 방법이나 자기소개서 작성법에 대한 정보가 존재하지 않아 많은 청소년들이 대입을 포기하거나, 아무 대학에나 지원해 입시를 운에 맡기고는 합니다.
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        이러한 안타까운 상황을 해결하려면 검정고시 맞춤 입시 정보 제공이 필수적이라는 생각이 들었습니다. 이에 수년간 학교 밖 청소년 전문 진학 컨설턴트 및 강사로 활동한 노하우를 가득 담아 <b>‘학교 밖 청소년 전문 진학 컨설팅 웹사이트 MY UNI’</b>를 제작했습니다.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ mb: 2 }}>
                        MYUNI 탑재 기능은 다음과 같습니다.
                    </Typography>
                    <Card variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="body1" component="div">
                                <ol>
                                    <li>검정고시 성적 ⇒ 내신 등급/점수 자동 환산</li>
                                    <li>대학별 입시 결과(내신 커트라인) 확인</li>
                                    <li>수시 지원 컨설팅 + 서류 작성(청소년생활기록부 및 대체서식) 컨설팅 + 면접 컨설팅</li>
                                    <li>대학입시 소양교육 강의(학교 밖 청소년 진학 전략 + 서류 준비 + 면접 준비)</li>
                                    <li>진로 설계 컨설팅</li>
                                </ol>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}


export default function MyUni() {

    const [open, setOpen] = useState(false);

    const consultantIntroduction = () => {

        return (
            <React.Fragment>
                <Box sx={{ textAlign: 'left '}}>
                <BoxTitle>학교 밖 청소년 전문 진학 컨설턴트/강사 강예은</BoxTitle>
                <Grid container spacing={2}>
                    <Grid item md={5}>
                        <Image alt="consultant_profile" src="img/consultant_profile.jpg" />
                    </Grid>
                    <Grid item md={7}>
                        <Typography variant='h6'>
                            수상 경력
                        </Typography>
                        <Typography variant="body1" component="div">
                            <ul>
                                <li>2021 대한민국 인재상</li>
                                <li>전국 학교 밖 청소년 지원사업 여성가족부장관상</li>
                                <li>김포시청소년육성재단 이사장 표창장</li>
                            </ul>
                        </Typography>
                        <Typography variant='h6' sx={{ mt: 4 }}>
                            경력사항
                        </Typography>
                        <Typography variant="body1" component="div">
                            <ul>
                                <li><DateText>2020.09 ~ </DateText> 검정고시 출신자 맞춤 진학 홈페이지 MY UNI 개발</li>
                                <li><DateText>2020.07 ~ </DateText> 학교 밖 청소년 대학 진학 강의 유튜브 채널 운영</li>
                                <li><DateText>2020.09 ~ </DateText> 서울시 학교밖청소년도움센터 친구랑 진학 컨설팅 1200회</li>
                                <li><DateText>2018.04 ~ </DateText> 김포시 학교 밖 청소년지원센터 대학입시 소양교육</li>
                                <li><DateText>2022.11</DateText> 김포시 학교 밖 청소년 지원센터 진로 설계 프로그램 진행</li>
                                <li><DateText>2022.11</DateText> 2022 글로벌인재포럼 〈대전환 시대의 진로 탐색〉 세션 연사</li>
                                <li><DateText>2022.10</DateText> 동두천 학교 밖 청소년 1:1 면접 컨설팅 </li>
                                <li><DateText>2022.09</DateText> 경상남도 학교 밖 청소년 진학 박람회 면접 교육</li>
                                <li><DateText>2022.09</DateText> 동두천시 학교 밖 청소년 지원센터 모의 면접 교육</li>
                            </ul>
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <KeyboardDoubleArrowDownIcon 
                                color='secondary' 
                                sx={{ fontSize: 40, cursor: 'pointer' }}
                                onClick={()=>setOpen(true)}
                            >
                            </KeyboardDoubleArrowDownIcon>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </React.Fragment>
        );
    }

    const labels = ["MyUni 소개", "컨설턴트 소개"];
    const contents = [
        myUniIntroduction(),
        consultantIntroduction(open, setOpen)
    ];

    return (
        <React.Fragment>
            <PageLayout title={"MYUNI"} secondary={"학교 밖 청소년 전문 진학 컨설팅"}>
                <TabContainer labels={labels} contents={contents} />
            </PageLayout>
            <Drawer
                anchor={'bottom'}
                open={open}
                onClose={()=>setOpen(false)}
                sx={{backgroundColor: '#FFFAFA'}}
            >
                <Box
                sx={{ 
                    width: 'auto',
                    p: {xs: 3, md: 8},
                    backgroundColor: '#FFFAFA'
                }}
                role="presentation"
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Typography variant='h6' sx={{ mt: 4 }}>
                            경력사항
                        </Typography>
                        <CloseIcon sx={{ cursor: 'pointer' }} onClick={()=>setOpen(false)}></CloseIcon>
                    </Box>
                    <Typography variant='body1'>현재</Typography>  
                    <Typography variant="body1" component="div">
                        <ul>
                            <li><DateText>2020.09 ~ </DateText> 검정고시 출신자 맞춤 진학 홈페이지 MY UNI 개발</li>
                            <li><DateText>2020.07 ~ </DateText> 학교 밖 청소년 대학 진학 강의 유튜브 채널 운영</li>
                            <li><DateText>2020.09 ~ </DateText> 서울시 학교밖청소년도움센터 친구랑 진학 컨설팅 1200회</li>
                            <li><DateText>2018.04 ~ </DateText> 김포시 학교 밖 청소년지원센터 대학입시 소양교육</li>
                        </ul>
                    </Typography>
                    <Typography variant='body1'>2022년 9~11월</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li><DateText>2022.11</DateText> 김포시 학교 밖 청소년 지원센터 진로 설계 프로그램 진행</li>
                            <li><DateText>2022.11</DateText> 2022 글로벌인재포럼 〈대전환 시대의 진로 탐색〉 세션 연사</li>
                            <li><DateText>2022.10</DateText> 동두천 학교 밖 청소년 1:1 면접 컨설팅 </li>
                            <li><DateText>2022.09</DateText> 경상남도 학교 밖 청소년 진학 박람회 면접 교육</li>
                            <li><DateText>2022.09</DateText> 동두천시 학교 밖 청소년 지원센터 모의 면접 교육</li>
                            <li><DateText>2022.09</DateText> 부산광역시 남구 학교 밖 청소년 지원센터 대학입시설명회</li>
                        </ul>
                    </Typography> 
                    <Typography variant='body1'>2022년 8월</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li>하남시 학교 밖 청소년 지원센터 1;1 진학 컨설팅</li>
                            <li>포항시 학교 밖 청소년 지원센터 대학입시 설명회</li>
                            <li>울산광역시 남구 대학입시 프로그램 〈어쩌다, 신입생〉 진행</li>
                            <li>동두천 학교 밖 청소년 지원센터 자기소개서 교육</li>
                            <li>서울시교육청 학교 밖 청소년 도움센터 진학 강의 60차시</li>
                            <li>하남시 학교 밖 청소년 지원센터 입시설명회 </li>
                        </ul>
                    </Typography>
                    <Typography variant='body1'>2022년 7월</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li>부산지역 학교 밖 청소년 지원센터 실무자 역량 강화 교육연수 </li>
                            <li>용인시 학교 밖 청소년 1:1 진학 컨설팅 </li>
                            <li>노원구 학교 밖 청소년 지원센터 실무자 교육</li>
                        </ul>
                    </Typography>
                    <Typography variant='body1'>2022년 6월</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li>김포시 학교 밖 청소년 지원센터 취업 소양교육 진행</li>
                            <li>충청북도 학교 밖 청소년 1:1 진학 컨설팅(35인 대상)</li>
                        </ul>
                    </Typography>
                    <Typography variant='body1'>2022년 5월</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li>울산광역시 학교 밖 청소년 지원센터 대학입시설명회</li>
                            <li>부산광역시 남구 학교 밖 청소년 지원센터 대학입시설명회</li>
                            <li>광주시 학교 밖 청소년 지원센터 대학입시설명회/컨설팅</li>
                            <li>동두천 학교 밖 청소년 지원센터 대학입시설명회</li>
                        </ul>
                    </Typography>
                    <Typography variant='body1'>~ 2022년 4월</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li><DateText>2022.03</DateText> 부산지역 학교 밖 청소년 지원센터 실무자 역량 강화 교육연수</li>
                            <li><DateText>2022.03</DateText> 한국청소년상담복지개발원 학교 밖 청소년 지원센터 종사자 보수교육 진행</li>
                            <li><DateText>2022.02</DateText> 대구광역시 학교 밖 청소년 지원센터 대학입시 설명회</li>
                        </ul>
                    </Typography>
                    <Typography variant='body1'>~ 2021년</Typography> 
                    <Typography variant="body1" component="div">
                        <ul>
                            <li><DateText>2021.11</DateText> 고양시 학교 밖 청소년 지원센터 면접 컨설팅</li>
                            <li><DateText>2021.08</DateText> 부산광역시 남구 학교 밖 청소년 지원센터 입시 설명회</li>
                            <li><DateText>2021.08</DateText> 전라남도 학교 밖 청소년 지원센터 대학입시 설명회</li>
                            <li><DateText>2021.08</DateText> 부산광역시 연제구 1:1 진학 컨설팅 진행(10인 대상)</li>
                            <li><DateText>2021.08</DateText> 경상남도 학교 밖 청소년 지원센터 대학입시설명회</li>
                            <li><DateText>2021.07</DateText> 충청북도 학교 밖 청소년 지원센터 대학입시설명회</li>
                            <li><DateText>2021.07</DateText> 경기도 학교 밖 청소년 지원센터 맞춤형 대학입시설명회</li>
                            <li><DateText>2021.06</DateText> 한국청소년상담복지개발원 학교 밖 청소년 진학 설명회</li> 
                            <li><DateText>2021.05</DateText> 울산광역시 학교 밖 청소년 지원센터 대학입시설명회</li>
                            <li><DateText>2021.05 / 08</DateText> 기장군 진로교육센터 학교 밖 청소년 맞춤형 입시설명회</li>
                            <li><DateText>2021.03</DateText> 부산광역시 학교 밖 청소년 지원센터 실무자 교육</li>
                            <li><DateText>2020.08 ~ 2021.02</DateText> 서울세계시민교육 현황 분석 및 향후 추진 과제 연구</li> 
                            <li><DateText>2020.10 ~ 2020.11</DateText> 서울시교육청 자율 청소년 메이커톤 프로젝트 멘토</li>
                        </ul>
                    </Typography>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

const DateText = styled.span`
    color: grey;
    padding-right: 8px;
    font-style: italic;
`;