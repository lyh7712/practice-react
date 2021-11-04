import React from 'react';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import PropTypes from 'prop-types';

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 600;
`;

const Description = styled.p``;

const DetailContainer = styled.div``;

const Detail = styled.span`
  font-weight: 600;
  margin-bottom: 2px;
`;

const Btn = styled.button`
  margin-top: 15px;
`;

const DetailPresenter = ({
  name,
  symbol,
  description,
  rank,
  open_source,
  proof_type,
  org_structure,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Title>
        {name} / {symbol}
      </Title>
      <Description>{description}</Description>
      <DetailContainer>
        <Detail>Rank: </Detail>
        {rank}
      </DetailContainer>
      <DetailContainer>
        <Detail>Open Source: </Detail>
        {open_source ? 'Yes' : 'No'}
      </DetailContainer>
      <DetailContainer>
        <Detail>Proof Type: </Detail>
        {proof_type}
      </DetailContainer>
      <DetailContainer>
        <Detail>Structure: </Detail>
        {org_structure}
      </DetailContainer>
      <Btn>MARKETS</Btn>
      <Btn>EXCHANGES</Btn>
    </Container>
  );

DetailPresenter.prototypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  open_source: PropTypes.string.isRequired,
  proof_type: PropTypes.string.isRequired,
  org_structure: PropTypes.string.isRequired,
};

export default DetailPresenter;
