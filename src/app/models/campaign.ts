export type Campaign = {
  id: string;
  title: string;
  description: string;
  point: number;
  date: string;
};

export type UpdateCampaign = {
  updateData: Pick<Campaign, 'id' | 'title' | 'description'>;
};
