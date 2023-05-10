import { useEffect, useState } from "react";
import tw from "twin.macro";
import { Button, DropMenu, Img } from "../../components";
import { UserUIContainer } from "../../layouts/UserUIContainer";

import { useState } from "react";
import tw from "twin.macro";
import {Button} from "./Button"
import styled from "@emotion/styled";
//이 컴포넌트는 나중에 마이페이지 페이지 제작할 때 들어갈 컴포넌트로 이 파일 삭제 후 마이페이지 페이지에 바로 컴포넌트 생성 후 활용할 예정
/* reserve = {예약번호 : INT,
              신청일 : DATE,
              시설분류 : Charset,
              예약날짜 : DATE,
              예약시간 : TIME,
              처리상태 : boolean} 이라고 가정*/
const ReservCard =(reserve) => {
  
  return (
    <div tw="flex flex-column bg-neutral-1">
      <p>{reserve.inDate}</p>
      <div tw="w-full flex flex-between rounded-lg bg-white">
        <table tw="text-left">
          <tr>
            <td>예약번호 : {reserve.reserveNum}</td>
            <td>시설분류 : {reserve.roomSep}</td>
          </tr>
          <tr>
            <td>예약날짜 : {reserve.resDate}</td>
            <td>예약시간 : {reserve.resTime}</td>
          </tr>
          <tr>
            <td rowSpan={2}>처리상태 : {reserve.resAllow}</td>
          </tr>
        </table>
        <span tw="flex flex-column justify-center">
          <Button variant = {"trans"}>예약취소</Button>
        </span>
      </div>
    </div>
  );
}

const Tab = () => {
  return (
    <div tw="w-full absolute top-0 left-0 bg-white">
      <div tw="max-w-screen-lg mx-auto flex-between">
        <div>
          <button tw="text-neutral-7 mr-5 active:(text-dguMain font-bold)">예약내역</button>
          <button tw="text-neutral-7 active:(text-dguMain font-bold)">예약승인내역</button>
        </div>
        <button onClick={() => router.push("/buildings")}>
          <img src="/static/out_icon.png" alt="나가기"/>
        </button>
      </div>
    </div>
  )
}

export default function MyPage() {
  return(
    <UserUIContainer title="mypage" headerBorder footer>
      <main tw="h-full w-full bg-neutral-3 relative">
        <Tab />
        <section tw="max-w-screen-lg mx-auto text-center my-28">
          {/* 예약 카드 넣을 자리 */}
        </section>
      </main>
    </UserUIContainer>
  )
}