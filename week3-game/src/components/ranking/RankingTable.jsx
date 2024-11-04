import React from "react";
import * as S from "./RankingTable.style";

const RankingTable = ({ data }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>타임스탬프</S.TableHeader>
          <S.TableHeader>레벨</S.TableHeader>
          <S.TableHeader>플레이 시간</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => (
          <S.TableRow key={index}>
            <S.TableCell>{new Date(d.date).toLocaleString()}</S.TableCell>
            <S.TableCell>레벨 {d.level}</S.TableCell>
            <S.TableCell>{d.playTime} 초</S.TableCell>
          </S.TableRow>
        ))}
      </tbody>
    </S.Table>
  );
};

export default RankingTable;
