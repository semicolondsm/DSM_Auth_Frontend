import React, { useLayoutEffect, useEffect } from "react";

import { Route, useHistory } from "react-router-dom";

import * as S from "./styles";

import des1 from "../../assets/des1.PNG";
import des2 from "../../assets/des2.PNG";
import des3 from "../../assets/des3.PNG";
import des4 from "../../assets/des4.PNG";

const androidcode = `val instance=DsmSdk.instance

instance.initSDK("<$client_id>","<$client_secret>","<$redirect_url>")`;

const androidcode2 = `val tokenCallback:(DTOtoken?,Throwable?)->Unit={token,error->    //토큰을 받아왔을때의 콜백메서드
  if(error!=null){
      Log.e("sdk",error)
  }
  else if(token!=null){
      val accessToken=token.access_token   //access토큰
      val refreshToken=token.refresh_token //refresh토큰
      Toast.makeText(this,"로그인 성공",Toast.LENGTH_SHORT).show()
  }
}

val loginCallBack:(DTOuser?)->Unit={  //사용자 정보를 받아왔을때의 콜백메서드
  val name=it?.name                //이름
  val email=it?.email              //이메일
  val gcn=it?.gcn                  //학번
}
instance.loginWithAuth(this,callback,loginCallBack) //loginWithAuth메서드 호출`;

const androidcode3 = `val acessTokenCallBack:(accessToken:String)->Unit={
  Log.d("토큰",it)    //refreshToken이 잘못되거나 오류가 날 경우 null 이 반홥됩니다.
}
instance.refreshToken(refreshToken,acessTokenCallBack)`;

const androidcode4 = `val checkToken:(DTOuser?)->Unit={
  if (it != null) { //accessToken이 잘못되면 null이 반환됩니다.
      Log.d("사용자",it.name)
      Log.d("사용자",it.email)
      Log.d("사용자",it.gcn)
  }
}
instance.getUserInformation(accessToken,checkToken)`;

const swiftcode = `import DSMSDK

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  
  ...
  DSMSDKCommon.initSDK(clientID: 〈CLIENT_ID〉,
                       clientSecret: 〈CLIENT_SECRET〉,
                       redirectURL: 〈REDIRECT_URL〉)
  ...
  
}`;

const swiftcode2 = `DSMAUTH.loginWithDSMAuth(vc: self) { (token, error) in
	if let error = error {
		print(error)
	}
  else {
    print("loginWithDSMAuth() success!")

    //do something
    _ = token!.Access_Token
    _ = token!.Refresh_Token
	}
}`;

const swiftcode3 = `DSMAUTH.tokenRefresh(refresh_token: 〈REFRESH_TOKEN〉){ (access_token, error) in
	if let error = error{
		print(error)
	}
	else{
    print("tokenRefresh() success!")

    //do something
		_ = access_token!
	}
}`;

const swiftcode4 = `DSMAUTH.me(access_token: 〈ACCESS_TOKEN〉){ (user, error) in
	if let error = error{
		print(error)
	}
	else{
		print("me() success!")

    //do something
    _ = user!.name
    _ = user!.StudentID
    _ = user!.email
	}
}`;

const api1 = `Body
{
    client_id: <client_id>,
    client_secret: <client_secret>,
    code: <code>
}
`;
const api2 = `Status code 200 OK
{
    access-token: <access_token>,
    refresh-token: <refresh_token>
}
`;
const api3 = `Status code 400 Bad Request
{
    code: 400,
    message: "Bad Request"
}
`;
const api4 = `Status code 401 Unauthorized
{
    code: 401,
    message: "Unauthorized Secret Key"
}
`;
const api5 = `Status code 403 Forbidden
{
    code: 403
    message: "Forbidden code"
}
`;
const api6 = `Header
{
    refresh-token: Bearer <refresh_token>
}
`;
const api7 = `Status code 200 OK
{
    access-token: <access_token>
}
`;
const api8 = `Status code 401 Unauthorized
{
    code: 419,
    message: "Expired token"
}
`;
const api9 = `Status code 403 Forbidden
{
    code: 403,
    message: "Forbidden Consumer"
}
`;
const api10 = `Header
{
    access-token: Bearer <access_token>
}`;
const api11 = `Status 200 OK
{
    name: "OOO",
    gcn: "9999",
    email: "209999xxx@dsm.hs.kr"
}`;
const api12 = `Status code 401 Unauthorized
{
    code: 401,
    message: "Unauthorized token"
}`;

const Api = (props) => {
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const kcode = event.keyCode;
      if (kcode == 116) {
        event.preventDefault();
        if (window.location.pathname.slice(1, 5) == "docs") {
          window.location.href =
            window.location.origin + window.location.pathname.slice(0, 6);
        }
      }
    });
  }, []);

  useLayoutEffect(() => {
    [...document.getElementsByClassName("titles")].forEach((element, index) => {
      element.addEventListener("click", () => {
        const self = document.getElementsByClassName("itemWrap")[index];
        element.classList.toggle("clicked");
        if (element.classList.contains("clicked")) {
          self.style.height = self.scrollHeight + "px";
        } else {
          self.style.height = 0;
        }
      });
    });

    [...document.getElementsByClassName("itemWrap")].forEach(
      (element, index) => {
        [...element.children].forEach((childElement, childIndex) => {
          if (childElement.classList.contains("no")) return;
          childElement.addEventListener("click", () => {
            [...document.getElementsByClassName("no")].forEach((delement) => {
              delement.children[0].style.opacity = 0;
            });
            document.getElementById(`item${index + 1}Fill`).style.opacity = 1;
            history.replace(`/docs/${index + 1}`);
          });
        });
      }
    );

    if (props.number == null) return;
    document.getElementsByClassName("itemWrap")[props.number].style.height =
      document.getElementsByClassName("itemWrap")[props.number].scrollHeight +
      "px";
    document.getElementById(`item${props.number + 1}Fill`).style.opacity = 1;
    document
      .getElementsByClassName("titles")
      [props.number].classList.toggle("clicked");
  }, []);

  useLayoutEffect(() => {
    const target = document.getElementById("docs");
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
    };

    function callback() {
      if (window.location.pathname.slice(1, 5) != "docs") return;
      window.addEventListener("scroll", () => {
        if (
          window.location.pathname.slice(1, 5) != "docs" ||
          isNaN(window.location.href.slice(-1))
        )
          return;
        [...document.getElementsByClassName("docsWrap")[0].children].forEach(
          (element, index) => {
            const elementOffset = element.getBoundingClientRect().top - 125;
            const offset =
              element.getBoundingClientRect().top +
              document.documentElement.scrollTop -
              125;
            const height = element.clientHeight;
            let hun = Math.abs(
              ((offset + height - document.documentElement.scrollTop - height) /
                height) *
                47
            );
            if (Math.floor(elementOffset) <= 0) {
              if (
                hun + index * 47 >=
                (document.getElementsByClassName("docsWrap")[0].children
                  .length -
                  1) *
                  47
              ) {
                hun = 0;
              }
              document.getElementById(
                `item${window.location.pathname.slice(-1)}Fill`
              ).style.transform = `translateY(${hun + index * 47}px)`;
              if (
                document.documentElement.scrollTop +
                  document.documentElement.clientHeight ==
                document.documentElement.scrollHeight
              ) {
                document.getElementById(
                  `item${window.location.pathname.slice(-1)}Fill`
                ).style.transform = `translateY(${
                  (document.getElementsByClassName("docsWrap")[0].children
                    .length -
                    1) *
                  47
                }px)`;
              }
            }
          }
        );
      });
      [...document.getElementsByClassName("itemWrap")].forEach(
        (element, index) => {
          [...element.children].forEach((childElement, childIndex) => {
            if (childElement.classList.contains("no")) return;
            childElement.addEventListener("click", () => {
              const self = document.getElementById(
                `section${index + 1}${childIndex + 1}`
              );

              document.documentElement.scrollTo({
                top:
                  self.getBoundingClientRect().top +
                  document.documentElement.scrollTop -
                  125,
                behavior: "smooth",
              });
            });
          });
        }
      );
    }

    const observer = new MutationObserver(callback);

    observer.observe(target, config);
    callback();
  }, []);

  useLayoutEffect(() => {
    const page = window.location.pathname.slice(-1);
    if (isNaN(page)) return;

    [
      ...document.getElementsByClassName("itemWrap")[Number(page) - 1].children,
    ].forEach((element) => {
      if (element.classList.contains("no")) return;
      [...document.getElementsByClassName("docsWrap")[0].children].forEach(
        (docsElement, index) => {
          docsElement.setAttribute("id", `section${page}${index + 1}`);
        }
      );
    });
  });

  return (
    <S.Wrapper>
      <S.SideBar>
        <S.SideItem>
          <S.SideTitle className="titles">시작하기</S.SideTitle>
          <S.SideSubWrapper className="itemWrap">
            <S.SideSub>소개</S.SideSub>
            <S.SideSub>로그인 하기</S.SideSub>
            <S.SideSub>어플리케이션 등록하기</S.SideSub>
            <S.SideLine className="no">
              <S.SideLineFill id="item1Fill"></S.SideLineFill>
            </S.SideLine>
          </S.SideSubWrapper>
        </S.SideItem>
        <S.SideItem>
          <S.SideTitle className="titles">Android SDK</S.SideTitle>
          <S.SideSubWrapper className="itemWrap">
            <S.SideSub>시작하기</S.SideSub>
            <S.SideSub>준비하기</S.SideSub>
            <S.SideSub>로그인</S.SideSub>
            <S.SideSub>토큰 재발급</S.SideSub>
            <S.SideSub>정보 받아오기</S.SideSub>
            <S.SideSub>더보기</S.SideSub>
            <S.SideLine className="no">
              <S.SideLineFill id="item2Fill"></S.SideLineFill>
            </S.SideLine>
          </S.SideSubWrapper>
        </S.SideItem>
        <S.SideItem>
          <S.SideTitle className="titles">iOS SDK</S.SideTitle>
          <S.SideSubWrapper className="itemWrap">
            <S.SideSub>시작하기</S.SideSub>
            <S.SideSub>준비하기</S.SideSub>
            <S.SideSub>로그인</S.SideSub>
            <S.SideSub>토큰 재발급</S.SideSub>
            <S.SideSub>정보 받아오기</S.SideSub>
            <S.SideSub>더보기</S.SideSub>
            <S.SideLine className="no">
              <S.SideLineFill id="item3Fill"></S.SideLineFill>
            </S.SideLine>
          </S.SideSubWrapper>
        </S.SideItem>
        <S.SideItem>
          <S.SideTitle className="titles">Api Docs</S.SideTitle>
          <S.SideSubWrapper className="itemWrap">
            <S.SideSub>소개</S.SideSub>
            <S.SideSub>토큰 발급</S.SideSub>
            <S.SideSub>토큰 재발급</S.SideSub>
            <S.SideSub>정보 받아오기</S.SideSub>
            <S.SideLine className="no">
              <S.SideLineFill id="item4Fill"></S.SideLineFill>
            </S.SideLine>
          </S.SideSubWrapper>
        </S.SideItem>
      </S.SideBar>
      <S.Section>
        <S.ContentBox id="docs">
          <Route path="/docs/1">
            <S.DocsWrapper className="docsWrap">
              <S.DocsSection>
                <S.DocsTitle>소개</S.DocsTitle>
                <S.DocsDes>
                  우리 DSM Auth는 동아리별 여러 프로젝트에서 편하게 로그인을
                  구현할 수 있고, <br />
                  사용자들이 새로 계정을 만들 필요가 없어 접근성을 더욱 쉽게
                  만들어줄 수 있는 서비스 입니다. <br />
                  <br />
                  <S.DocsSubTitle>Made By Semicolon</S.DocsSubTitle>
                  <br />
                  Front-end
                  <br />- 안은결
                  <br />- 정지원
                  <br />- 성예인
                  <br />
                  <br />
                  Back-end
                  <br />- 정지우
                  <br />- 조호원
                  <br />- 손채건
                  <br />- 이서준
                  <br />
                  <br />
                  Android
                  <br />- 김재원
                  <br />- 최민준
                  <br />
                  <br />
                  iOS
                  <br />- 김수완
                  <br />
                  <br />
                  Design
                  <br />- 이재원
                </S.DocsDes>
                <S.DocsSubTitle>주의사항</S.DocsSubTitle>
                <S.DocsDes>
                  OAuth에 대한 배경지식을 쌓으면 이해가 쉽습니다. -{" "}
                  <S.DocsA href="https://ko.wikipedia.org/wiki/OAuth">
                    OAuth 위키백과
                  </S.DocsA>
                </S.DocsDes>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>로그인하기</S.DocsTitle>
                이용약관을 체크하신 후 로그인을 합니다.
                <br />
                계정이 없다면 ? -{" "}
                <S.DocsA href="" onClick={() => history.push("/register")}>
                  회원가입 하러가기
                </S.DocsA>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>어플리케이션 등록하기</S.DocsTitle>
                <S.DocsDes>
                  오른쪽 상단 내 이름을 클릭후 내 정보로 들어갑니다.
                </S.DocsDes>
                <S.DocsImg src={des1} />
                <br />
                <S.DocsImg src={des2} />
                <S.DocsDes>내 어플리케이션 옆 + 버튼을 클릭해줍니다.</S.DocsDes>
                <S.DocsImg src={des3} />
                <S.DocsDes>
                  제시된 칸을 모두 채운 후 등록 버튼을 클릭합니다.
                </S.DocsDes>
                <S.DocsImg src={des4} />
                <S.DocsDes>
                  1) 등록할 서비스의 이름 <br />
                  2) 등록할 서비스의 도메인 <br />
                  3) DSM Auth 로그인 후 리다이렉트 될 URL
                </S.DocsDes>
              </S.DocsSection>
            </S.DocsWrapper>
          </Route>
          <Route path="/docs/2">
            <S.DocsWrapper className="docsWrap">
              <S.DocsSection>
                <S.DocsTitle>시작하기</S.DocsTitle>
                <S.DocsSubTitle>주의사항</S.DocsSubTitle>
                <S.DocsDes>
                  이 문서는 안드로이드에서 DSM_Auth를 사용하는 방법을
                  안내합니다.
                </S.DocsDes>
                <S.DocsSubTitle>요구사항</S.DocsSubTitle>
                <S.DocsDes>
                  DSMSDK를 사용하기 위한 최소 요구사양은 아래와 같습니다.
                  <br /> - Android api level 23(Android 6.0)이상
                </S.DocsDes>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>준비하기</S.DocsTitle>
                <S.DocsSubTitle>설치하기</S.DocsSubTitle>
                <S.DocsDes>
                  1. Module 수준의 build.gradle에 다음 dependencies 를
                  추가해줍니다.
                </S.DocsDes>
                <S.DocsCode>
                  implementation 'com.semicolon.dsm_sdk_v1:dsmauth:1.2.8'
                </S.DocsCode>
                <S.DocsDes>
                  2. <b>sync now</b> 를 클릭합니다.
                  <br />
                  <br />
                  3. sdk를 사용할때 원할한 인터넷통신을 위해서 다음코드를{" "}
                  <b>AndroidManifest.xml</b> 에 추가해줍니다.
                </S.DocsDes>
                <S.DocsCode>android:usesCleartextTraffic="true"</S.DocsCode>
                <S.DocsSubTitle>초기화</S.DocsSubTitle>
                <S.DocsDes>
                  1. 사용할 클래스에서 DsmSdk파일을 import 해야합니다.
                </S.DocsDes>
                <S.DocsCode>
                  import com.semicolon.dsm_sdk_v1.DTOuser import
                  <br />
                  com.semicolon.dsm_sdk_v1.DsmSdk import
                  <br />
                  com.semicolon.dsm_sdk_v1.token
                  <br />
                </S.DocsCode>
                <S.DocsDes>
                  2. 발급받은 client id,client secret, 그리고 프로젝트의
                  redirectURL(없을경우 발급받은 default redirectURL)을 통해서
                  DsmSdk를 초기화 해야합니다.
                  <br />
                  <br /> - DsmSdk.instance.initSDK()메서드를 사용합니다.
                  <br /> - 예제의 홀화살괄호`〈 〉`로 감싸져 있는 부분은
                  사용자가 정의해주셔야합니다.
                </S.DocsDes>
                <S.DocsCode>{androidcode}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>로그인</S.DocsTitle>
                <S.DocsDes>
                  - DSM_Auth계정으로 로그인 하려면 instance내부에 있는
                  loginWithAuth()메서드를 사용해야합니다.
                  <br /> - loginWithAuth()메서드를 사용하는 방법은 다음과
                  같습니다.
                  <br />
                  <br /> 1. 첫번째 매개변수로 context를 줍니다.
                  <br /> 2. 두번째 매개변수로 토큰을 받았을때 실행할 콜백함수를
                  줍니다.
                  <br /> 3. 세번째 사용자 정보를 받았을때 실행할 콜백함수를
                  줍니다.
                  <br /> 4. 메서드를 실행합니다. <br />- name은 이름, email은
                  이메일,gcn은 학번(4자리)를 반환합니다
                  <br />
                  <br /> - 예시코드
                </S.DocsDes>
                <S.DocsCode>{androidcode2}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>토큰 재발급</S.DocsTitle>
                <S.DocsDes>
                  - DsmSdk는 access token을 재발급 받을수있는 **refreshToken()**
                  메서드를 지원합니다.
                  <br /> - 파라미터로 로그인할때 받아온 refresh토큰과 access
                  token을 재발급 받았을때 실행할 콜백 메서드를 넣어줍니다.
                  <br />
                  <br /> - 예시코드
                </S.DocsDes>
                <S.DocsCode>{androidcode3}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>사용자 정보 받아오기</S.DocsTitle>
                <S.DocsDes>
                  - DsmSdk는 accessToken으로 사용자의 정보를 받아오는
                  **getUserInformation()** 메서드를 지원합니다.
                  <br />
                  - 파라미터로 access token과 정보를 받아왔을때 실행할
                  콜백메서드를 넣어줍니다.
                  <br />
                  <br />- 예시코드
                </S.DocsDes>
                <S.DocsCode>{androidcode4}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>더보기</S.DocsTitle>
                <S.DocsDes>
                  - [DSMSDK 깃 허브]{" "}
                  <S.DocsA href="https://github.com/semicolonDSM/DSMSDK_Android">
                    https://github.com/semicolonDSM/DSMSDK_Android
                  </S.DocsA>
                  <br />- [example code]
                  <S.DocsA href="https://github.com/jaewonkim1468/DSM_SDK_TEST">
                    https://github.com/jaewonkim1468/DSM_SDK_TEST
                  </S.DocsA>
                </S.DocsDes>
              </S.DocsSection>
            </S.DocsWrapper>
          </Route>
          <Route path="/docs/3">
            <S.DocsWrapper className="docsWrap">
              <S.DocsSection>
                <S.DocsTitle>시작하기</S.DocsTitle>
                <S.DocsSubTitle>주의사항</S.DocsSubTitle>
                <S.DocsDes>
                  이 문서는 DSM_Auth를 위한 iOS DSMSDK사용법을 안내합니다.
                  <br /> 모든 예제의 홀화살괄호`〈 〉`로 감싸져 있는 부분은
                  사용자가 정의해주셔야합니다.
                </S.DocsDes>
                <S.DocsSubTitle>요구사항</S.DocsSubTitle>
                <S.DocsDes>
                  DSMSDK를 사용하기 위한 최소 요구사양은 아래와 같습니다.
                  <br /> - iOS 13.0 이상.
                  <br /> - Swift 5.0이상
                </S.DocsDes>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>준비하기</S.DocsTitle>
                <S.DocsSubTitle>설치하기</S.DocsSubTitle>
                <S.DocsDes>
                  <S.DocsA href="https://guides.cocoapods.org/using/getting-started.html#getting-started">
                    https://guides.cocoapods.org/using/getting-started.html#getting-started
                  </S.DocsA>
                  를 이용하여 간단하게 SDK를 설치 할 수 있습니다. Podfile에
                  DSMSDK를 추가합니다.
                </S.DocsDes>
                <S.DocsCode>pod 'DSMSDK'</S.DocsCode>
                <S.DocsSubTitle>
                  외부 라이브러리 디펜던시(External library dependency)
                </S.DocsSubTitle>
                <S.DocsDes>
                  DSMSDK를 설치하면 SDK에 필요한 라이브러리가 자동으로
                  설치됩니다.
                </S.DocsDes>
                <S.DocsA href="https://github.com/Alamofire/Alamofire">
                  https://github.com/Alamofire/Alamofire
                </S.DocsA>
                <S.DocsSubTitle>초기화</S.DocsSubTitle>
                <S.DocsDes>
                  iOS 앱에서 DSMSDK를 사용하려면 DSMSDK 파일을 아래와 같이
                  임포트(import)해야 합니다. 또한 발급받은 클라이언트
                  아이디(client_id)와 클라이언트 시크릿(client_secret), 입력한
                  redirectURL을 사용해 DSMSDK를 초기화 하는 과정이 필요합니다.
                  다음 예제를 참고하여 AppDelegate.swift에 DSMSDK를 초기화하는
                  코드를 추가합니다.
                  <br />
                  <br />
                  <S.DocsCode>{swiftcode}</S.DocsCode>
                </S.DocsDes>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>로그인</S.DocsTitle>
                <S.DocsDes>
                  DSM_Auth계정 정보를 입력하여 로그인합니다. DSM_Auth계정으로
                  로그인 하려면 `loginWithDSMAuth()` API로 요청합니다.
                  <br />
                  파라미터로는 요청한 ViewController를 넣습니다. `self` 키워드로
                  대체할 수 있습니다. 이 API를 호출하면 DSMSDK가
                  웹뷰(WKWebView)를 실행하고 DSM_Auth 로그인 화면을 띄웁니다.
                  <br />
                  API 호출 시 결과 처리를 클로저(Closure) 객체로 정의하여
                  전달해야 합니다. token 구조체에는 엑세스 토큰(Access_Token)과
                  리프레쉬 토큰(Refresh_Token) 정보가 있습니다.
                </S.DocsDes>
                <S.DocsCode>{swiftcode2}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>토큰 재발급</S.DocsTitle>
                <S.DocsDes>
                  `tokenRefresh()` API로 access token을 재발급 받을 수 있습니다.
                  파라미터로 로그인할 때 받아온 리프레쉬 토큰을 넣습니다.
                  <br /> 다음은 토큰을 재발급받는 예제입니다.
                </S.DocsDes>

                <S.DocsCode>{swiftcode3}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>사용자 정보 받아오기</S.DocsTitle>
                <S.DocsDes>
                  사용자의 정보를 불러옵니다. `me()` API를 호출하여 불러올 수
                  있습니다. 파라미터로는 엑세스 토큰을 넣습니다.
                  <br /> 다음은 사용자 정보 요청 예제입니다. user 구조체에는
                  이름(name), 학번(StudentID), 이메일(email) 정보가 있습니다.
                </S.DocsDes>
                <S.DocsCode>{swiftcode4}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>더보기</S.DocsTitle>
                <S.DocsDes>
                  - [DSMSDK 깃 허브]{" "}
                  <S.DocsA href="https://github.com/semicolonDSM/DSMSDK_iOS">
                    https://github.com/semicolonDSM/DSMSDK_iOS
                  </S.DocsA>
                  <br />- [example code]
                  <S.DocsA href="https://github.com/kimxwan0319/DSMSDK_Test">
                    https://github.com/kimxwan0319/DSMSDK_Test
                  </S.DocsA>
                </S.DocsDes>
              </S.DocsSection>
            </S.DocsWrapper>
          </Route>
          <Route path="/docs/4">
            <S.DocsWrapper className="docsWrap">
              <S.DocsSection>
                <S.DocsTitle>소개</S.DocsTitle>
                <S.DocsDes>
                  이 문서는 DSM Auth Open API에 관한 문서입니다.
                  <br />
                  <br />
                  Base URL: http://54.180.98.91:8090/
                </S.DocsDes>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>토큰 발급</S.DocsTitle>
                <S.DocsSubTitle>/dsmauth/token/ {"    "}POST</S.DocsSubTitle>
                <S.DocsSubTitle>Request</S.DocsSubTitle>
                <S.DocsCode>{api1}</S.DocsCode>
                <S.DocsSubTitle>Response</S.DocsSubTitle>
                <S.DocsCode>{api2}</S.DocsCode>
                <S.DocsCode>{api3}</S.DocsCode>
                <S.DocsCode>{api4}</S.DocsCode>
                <S.DocsCode>{api5}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>토큰 재발급</S.DocsTitle>
                <S.DocsSubTitle>/dsmauth/refresh/ {"    "}GET</S.DocsSubTitle>
                <S.DocsSubTitle>Request</S.DocsSubTitle>
                <S.DocsCode>{api6}</S.DocsCode>
                <S.DocsSubTitle>Response</S.DocsSubTitle>
                <S.DocsCode>{api7}</S.DocsCode>
                <S.DocsCode>{api3}</S.DocsCode>
                <S.DocsCode>{api12}</S.DocsCode>
                <S.DocsCode>{api8}</S.DocsCode>
                <S.DocsCode>{api9}</S.DocsCode>
              </S.DocsSection>
              <S.DocsSection>
                <S.DocsTitle>정보 받아오기</S.DocsTitle>
                <S.DocsSubTitle>/v1/info/basic/ {"    "}GET</S.DocsSubTitle>
                <S.DocsSubTitle>Request</S.DocsSubTitle>
                <S.DocsCode>{api10}</S.DocsCode>
                <S.DocsSubTitle>Response</S.DocsSubTitle>
                <S.DocsCode>{api11}</S.DocsCode>
                <S.DocsCode>{api3}</S.DocsCode>
                <S.DocsCode>{api12}</S.DocsCode>
                <S.DocsCode>{api8}</S.DocsCode>
              </S.DocsSection>
            </S.DocsWrapper>
          </Route>
        </S.ContentBox>
      </S.Section>
    </S.Wrapper>
  );
};

export default Api;
